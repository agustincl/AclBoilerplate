<template>
	<div class="layout-view">
	    <div class="panel-heading">
	      <h3>Añade cosas</h3>
	    </div>
	    <div class="panel-body">
            <!-- CONTENT START -->
            <div class="panel-heading">
              <h3>Añade una cosa</h3>
            </div>
            <div class="panel-body">

              <div class="form-group">
                <input class="form-control" placeholder="Nombre de la cosa" v-model="thing.name">
              </div>

              <div class="form-group">
                <textarea class="form-control" placeholder="Descripcion de la cosa" v-model="thing.description"></textarea>
              </div>

              <div class="form-group">
                <input type="date" class="form-control" placeholder="Fecha" v-model="thing.date">
              </div>
              <!--poner un flag para ocultar/desocultar el boton con v-if= -->
              <button class="btn btn-primary" id="add" v-on:click="addThing">Añadir</button>
              <button class="btn btn-warning" id="updateb" v-on:click="updateThing">Actualizar</button>
              <button class="btn btn-info" v-on:click="clearStorage">Clear</button>

              <h5>
                <i class="glyphicon glyphicon-remove-circle" v-if="thing.error"></i>
                <span style="color: red">{{ thing.error }}</span>
              </h5>

            </div>
            <!-- CONTENT END -->
	    </div>
	    <div class="list-group">
	        <a href="#" class="list-group-item" v-for="(thing, index) in things">
	          <h4 class="list-group-item-heading">
	            <i class="glyphicon glyphicon-bullhorn"></i>
	            {{ thing.name }}
	          </h4>

	          <h5>
	            <i class="glyphicon glyphicon-calendar" v-if="thing.date"></i>
	            {{ thing.date }}
	          </h5>

	          <p class="list-group-item-text" v-if="thing.description">{{ thing.description }}</p>
	          <hr>
	          <button class="btn btn-xs btn-danger" v-on:click="deleteThing(index)">Borrar</button>
	          <button class="btn btn-xs btn-warning" v-on:click="chargeThing(index)">Actualizar</button>
	        </a>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'things',

  data: function () {
    return {
      thing: {name: '', description: '', date: ''},
      things: []
    }
  },

  beforeCreate2: function () {
    console.log('beforeCreate')

    var storageThings = [
      {
        id: 0,
        name: 'Cosa 0',
        description: 'Descripcion 0.',
        date: '2010-10-10'
      }
    ]

    if (localStorage['storageThings'] == null || localStorage['storageThings'].length === 0) {
      localStorage['storageThings'] = JSON.stringify(storageThings)
      this.$set(self, 'things', localStorage['storageThings'])
    }
  },

  beforeCreate: function () {
    console.log('beforeCreated')

    var initialThings = [
      {
        id: 0,
        name: 'Thing 0',
        description: 'Description 0.',
        date: '2010-10-10'
      }
    ]

    if (localStorage['initialThings'] == null || localStorage['initialThings'].length === 0) {
      localStorage['initialThings'] = ''
      console.log('empty localstorage!')
      localStorage['initialThings'] = JSON.stringify(initialThings)
      this.$set(self, 'things', localStorage['initialThings'])
      // var initialthings = JSON.parse(localStorage['initialThings']);
    }
  },

  mounted: function () {
    console.log('mounted')
    this.fetchThings()
  },
  // Methods we want to use in our application are registered here
  // methods: function() {
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchThings2: function () {
      var things = [  // eslint-disable-line
        {
          id: 1,
          name: 'Cosa 1 estatica',
          description: 'Descripcion 1.',
          date: '2011-11-11'
        },
        {
          id: 2,
          name: 'Cosa 2 estatica',
          description: 'Descripcion 2.',
          date: '2012-12-12'
        }
      ]

      var storageThings = JSON.parse(localStorage['storageThings'])  // en localStorage solo se puede guardar strings asi que se parsea
      // $set is a convenience method provided by Vue that is similar to pushing
      // data onto an array
      // Asincrono
      // this.$set(this, 'things', things);       // this = contenedor id="things", things = array inicializado en data
      this.$set(this, 'things', storageThings) // muestra el array de localStorage
    },
    fetchThings: function () {
      var staticInitialThings = [ // eslint-disable-line
        {
          id: 1,
          name: 'Thing 1',
          description: 'Description 1.',
          date: '2011-11-11'
        },
        {
          id: 2,
          name: 'Thing 2',
          description: 'Description 2.',
          date: '2012-12-12'
        }
      ]

      // $set is a convenience method provided by Vue that is similar to pushing
      // data onto an array
      var initialThings = JSON.parse(localStorage['initialThings'])

      // this.$set(this, 'things', staticInitialThings);
      this.$set(this, 'things', initialThings)
      console.log(initialThings)
      // this.$set(this.path.to.object, propName, valueFromStore);
      // this.$set(this.attendees, data.userToken, data);
      // this.attendees.$set(data.userToken, data);
    },

    addThing2: function () {
      if (this.thing.name) {
        this.things.push(this.thing)
        this.thing = {name: '', description: '', date: ''} // Inicializamos el objeto para la siguiente cosa y limpiar el formulario
      }
      else {
        this.thing = {error: 'cubre el nombre'}
      }
      localStorage['storageThings'] = JSON.stringify(this.things)
    },

    addThing: function () {
      if (this.thing.name) {
        this.things.push(this.thing)
        this.thing = {name: '', description: '', date: ''}
      }
      localStorage['initialThings'] = JSON.stringify(this.things)
    },

    deleteThing2: function (index) {
      console.log('Borrando elemento: ' + index)
      this.$delete(this.things, index)
      // var storageThings = JSON.parse(localStorage['storageThings']) // eslint-disable-line
      localStorage['storageThings'] = JSON.stringify(this.things)
    },

    deleteThing: function (index) {
      console.log('Delete index:' + index)
      if (confirm('Are you sure you want to delete this thing?')) {
        // $remove is a Vue convenience method similar to splice
        // this.$delete(this.things, index)
        // this.things.$remove(index)
        console.log('index:1' + self.$children)
        console.log('index:2' + this.$children)
        console.log('index:3' + this.things[index])
        console.log('index:4' + this.things)
        console.log('index:5' + index)
        // console.log(self.$children[index])
        // console.log(things.indexOf(index))
        // this.$destroy(this.things, index)
        this.things[index].this.$destroy()
      }
      var initialThings = JSON.parse(localStorage['initialThings']) // eslint-disable-line
      localStorage['initialThings'] = JSON.stringify(this.things)
    },

    chargeThing: function (index) {
      var storageThings = JSON.parse(localStorage['storageThings'])
      this.thing = storageThings[index]
    },

    updateThing: function () {
      var storageThings = JSON.parse(localStorage['storageThings'])
      var name = this.thing.name
      var description = this.thing.description

      storageThings.forEach(function (v, i) {
        if (storageThings[i].name === name) {
          storageThings[i].description = description
        }
      })
      this.things = storageThings
      localStorage['storageThings'] = JSON.stringify(storageThings)
      this.thing = []
    },

    clearStorage: function () {
      this.things = []
      localStorage.clear()
    },

    registerThing: function () {
      console.log('Registro: ')
    }
  }

}
</script>

<style>

</style>
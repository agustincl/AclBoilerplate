<template>
	<div class="layout-view">
      <router-view></router-view>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <a class="navbar-brand"><i class="glyphicon glyphicon-bullhorn"></i>I've seen things...</a>
        </div>
      </nav>
	    <div class="panel-heading">
	      <h3>Add a thing</h3>
	    </div>
	    <div class="panel-body">
            <!-- CONTENT START -->
            <div class="panel-heading">
              <h3>Add a Thing</h3>
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
              <button class="btn btn-primary" id="add" v-on:click="addThing">Add</button>
              <button class="btn btn-warning" id="update" v-on:click="updateThing">Update</button>
              <h5>
                <i class="glyphicon glyphicon-remove-circle" v-if="thing.error"></i>
                <span style="color: red">{{ thing.error }}</span>
              </h5>

            </div>
            <!-- CONTENT END -->
	    </div>
	    <div class="list-group">
	        <span class="list-group-item" v-for="(thing, index) in things">
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
	          <button class="btn btn-xs btn-danger" v-on:click="deleteThing(index)">Delete</button>
            <button class="btn btn-warning" id="update" v-on:click="readThing(index)">Update</button>
	        </span>
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

  // beforeCreate: function () {
  created: function () {
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

  // beforeRouteLeave: function (to, from, next) {
  //   console.log('beforeRouteLeave: ' + to)
  //   next(false)
  // },

  methods: {
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
      var initialThings = JSON.parse(localStorage['initialThings'])
      this.$set(this, 'things', initialThings)
      console.log(initialThings)
    },

    addThing: function () {
      if (this.thing.name) {
        this.things.push(this.thing)
        this.thing = {name: '', description: '', date: ''}
      }
      else {
        this.thing = {error: 'name required!'}
      }
      localStorage['initialThings'] = JSON.stringify(this.things)
    },

    deleteThing: function (index) {
      console.log('Delete index:' + index)
      if (confirm('Are you sure you want to delete this thing?')) {
        this.things.splice(index, 1)
        localStorage['initialThings'] = JSON.stringify(this.things)
      }
      else {
        console.log('delete error or cancelled')
      }
      // var initialThings = JSON.parse(localStorage['initialThings']) // eslint-disable-line
    },

    readThing: function (index) {
      console.log('Charge index: ' + index)
      var initialThings = JSON.parse(localStorage['initialThings'])
      this.thing = initialThings[index]
      this.thing.id = index
    },

    updateThing: function () {
      console.log('Update')
      var initialThings = JSON.parse(localStorage['initialThings'])
      var id = this.thing.id
      var name = this.thing.name
      var description = this.thing.description

      initialThings.forEach(function (v, i) {
        if (i === id) {
          initialThings[i].name = name
          initialThings[i].description = description
        }
      })
      this.things = initialThings
      localStorage['initialThings'] = JSON.stringify(initialThings)
      this.thing = []
    }
  }
}
</script>

<style>

</style>
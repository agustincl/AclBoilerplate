<template>
  <div class="layout-view">
    <div id="vue-instance" class="app">
          <h1>Random Word</h1>
        <button id="btn-get-random-word" @click="getRandomWord">Get Random Word</button>
        <p>{{ randomWord }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'random-word',
  data () {
    return {
      randomWord: ''
    }
  },

  methods: {
    getRandomWord () {
      this.randomWord = '...'
      this.$http.get(
          'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
        )
        .then((response) => {
          this.randomWord = response.data.word
          return this.randomWord
        })
        .catch((error) => {
          /* eslint-disable no-alert, no-console */
          alert(error.data)
          /* eslint-enable no-alert, no-console */
        })

      // this.$router.push('/')
    }
  }
}
</script>

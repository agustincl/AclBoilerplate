import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: load('Home')
    },
    {
      path: '/map',
      name: 'Map',
      component: load('Map')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: load('Menu')
    },
    {
      path: '/drawermenu',
      name: 'Drawermenu',
      component: load('Drawermenu'),
      children: [
        {
          path: '/random-word',
          name: 'RandomWord',
          component: load('RandomWord')
        },
        {
          path: '/things',
          name: 'Things',
          component: load('Things')
        }
      ]
    },
    { path: '*', component: load('Error404') } // Not found
  ]
})

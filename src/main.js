import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'


import './styles.css'

// Vue.config.debug = process.env.NODE_ENV !== 'production'

// Vue.use(VueRouter)

// const router = new VueRouter()
// const App = Vue.extend(app)
//
// router.start(App, 'body')

// components



new Vue ({
  el: '#root',
  template: '<div><App/></div>',
  components: { App },


})
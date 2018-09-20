import Vue from 'vue'
import App from './App.vue'
import TodoApp from './TodoApp.vue'
import AnotherApp from './AnotherApp.vue'
import VueRouter from 'vue-router'


import './styles.css'

// Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const routes = [
  {path: '/other', component: AnotherApp },
  {path: '/todo', component: TodoApp },

]
const router = new VueRouter({
  mode: 'history',
  routes
})
// const App = Vue.extend(app)
//
// router.start(App, 'body')

// components



const app = new Vue ({
  router,
  // el: '#root',
  components: {
    'app': App
  },
  template: '<div><app/></div>',
}).$mount('#root')

console.log(app);

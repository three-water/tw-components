import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const TwTable = resolve => require(['../../examples/tw-table/index'], resolve)

let routes = [
  { name: 'TwTable', path: '/tw-table', component: TwTable }
]

let router = new Router({
  routes: routes
})

export default router

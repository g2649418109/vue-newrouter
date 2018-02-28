// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import fullpath from './router/fullpath.js'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import iView from 'iview'
import '!style-loader!css-loader!less-loader!./theme/index.less'
Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Router)
Vue.use(vueResource)
Vue.http.options.emulateJSON = false

let token = sessionStorage.getItem('token')
var zancun = JSON.parse(sessionStorage.getItem('router'))
function getRouter () {
  var xxx = []
  xxx = [
    {
      path: '/',
      component: require('@/pages/Home'),
      children: []
    }
  ]
  for (var i = 0; i < zancun[1].length; i++) {
    for (var j = 0; j < fullpath[1].length; j++) {
      if (zancun[1][i].path === fullpath[1][j].path && zancun[1][i].name === fullpath[1][j].name) {
        if (fullpath[1][j].children !== undefined) {
          for (var x = 0; x < zancun[2].length; x++) {
            for (var k = 0; k < fullpath[2].length; k++) {
              if (zancun[2][x].path === fullpath[2][k].path && zancun[2][x].name === fullpath[2][k].name) {
                if (zancun[2][x].path.indexOf(fullpath[1][j].path) > -1) {
                  fullpath[1][j].children.push(fullpath[2][k])
                }
              }
            }
          }
        }
        xxx[0].children.push(fullpath[1][j])
      } else {
      }
    }
  }
  let notFound = {
    path: '/*',
    name: '404',
    component: require('@/pages/404')
  }
  xxx.push(notFound)
  return xxx
}
if (token) {
  let routes = getRouter()
  let router = new Router({routes})
  window.location.pathname = '/'
  router.beforeEach((to, from, next) => {
    if (to.path === '/') {
      next({path: '/homepage'})
    } else if (to.path === '/leaknav') {
      next({path: '/leaknav/leak-1'})
    } else if (to.path === '/workordernav') {
      next({path: '/workordernav/workorder-1'})
    } else if (to.path === '/systemnav') {
      next({path: '/systemnav/system-1'})
    } else {
      next()
    }
  })
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
} else {
  window.location.href = '#'
  window.location.pathname = 'login.html'
}

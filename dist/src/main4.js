'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _store = require('./store/store');

var _store2 = _interopRequireDefault(_store);

var _fullpath = require('./router/fullpath.js');

var _fullpath2 = _interopRequireDefault(_fullpath);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

require('!style-loader!css-loader!less-loader!./theme/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;

_vue2.default.use(_iview2.default);
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.http.options.emulateJSON = false;

var user = sessionStorage.getItem('user');
var zancun = JSON.parse(sessionStorage.getItem('router'));
function getRouter() {
  var xxx = [];
  xxx = [{
    path: '/',
    component: require('@/pages/Home'),
    children: []
  }];
  for (var i = 0; i < zancun[1].length; i++) {
    for (var j = 0; j < _fullpath2.default[1].length; j++) {
      if (zancun[1][i].path === _fullpath2.default[1][j].path && zancun[1][i].name === _fullpath2.default[1][j].name) {
        if (_fullpath2.default[1][j].children !== undefined) {
          for (var x = 0; x < zancun[2].length; x++) {
            for (var k = 0; k < _fullpath2.default[2].length; k++) {
              if (zancun[2][x].path === _fullpath2.default[2][k].path && zancun[2][x].name === _fullpath2.default[2][k].name) {
                if (zancun[2][x].path.indexOf(_fullpath2.default[1][j].path) > -1) {
                  _fullpath2.default[1][j].children.push(_fullpath2.default[2][k]);
                }
              }
            }
          }
        }
        xxx[0].children.push(_fullpath2.default[1][j]);
      } else {}
    }
  }
  return xxx;
}
if (user) {
  var routes = getRouter();
  var router = new _vueRouter2.default({ routes: routes });
  window.location.pathname = '/';
  router.beforeEach(function (to, from, next) {
    if (to.path === '/') {
      next({ path: '/homepage' });
    } else if (to.path === '/leaknav') {
      next({ path: '/leaknav/leak-1' });
    } else if (to.path === '/workordernav') {
      next({ path: '/workordernav/workorder-1' });
    } else if (to.path === '/systemnav') {
      next({ path: '/systemnav/system-1' });
    } else {
      next();
    }
  });
  /* eslint-disable no-new */
  new _vue2.default({
    el: '#app',
    router: router,
    store: _store2.default,
    template: '<App/>',
    components: { App: _App2.default }
  });
} else {
  window.location.href = '#';
  window.location.pathname = 'login.html';
}
//# sourceMappingURL=main4.js.map
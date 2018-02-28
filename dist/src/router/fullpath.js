'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fullpath = {
  '1': [{
    path: '/homepage',
    icon: 'fa fa-home',
    name: '首页',
    component: require('@/pages/homepage')
  }, {
    path: '/leaknav',
    name: '漏洞管理',
    icon: 'fa fa-bug',
    component: require('@/pages/leaknav'),
    children: []
  }, {
    path: '/workordernav',
    name: '工单管理',
    icon: 'fa fa-clipboard',
    component: require('@/pages/workordernav'),
    children: []
  }, {
    path: '/systemnav',
    name: '系统设置',
    icon: 'fa fa-cogs',
    component: require('@/pages/systemnav'),
    children: []
  }, {
    path: '/presentation',
    name: '报告管理',
    icon: 'fa fa-file-word-o',
    component: require('@/pages/presentation')
  }],
  '2': [{
    path: '/leaknav/leak-1',
    name: '全部漏洞',
    component: require('@/pages/leak/allleak')
  }, {
    path: '/leaknav/leak-2',
    name: '待提交漏洞',
    component: require('@/pages/leak/submitleak')
  }, {
    path: '/leaknav/leak-3',
    name: '待审核漏洞',
    component: require('@/pages/leak/examineleak')
  }, {
    path: '/leaknav/leak-4',
    name: '待处理漏洞',
    component: require('@/pages/leak/handleleak')
  }, {
    path: '/leaknav/leak-5',
    name: '待验证漏洞',
    component: require('@/pages/leak/verificationleak')
  }, {
    path: '/workordernav/workorder-1',
    name: '全部工单',
    component: require('@/pages/workorder/allworkorder')
  }, {
    path: '/workordernav/workorder-2',
    name: '待处理工单',
    component: require('@/pages/workorder/handleworkorder')
  }, {
    path: '/workordernav/workorder-3',
    name: '待审核工单',
    component: require('@/pages/workorder/examineworkorder')
  }, {
    path: '/workordernav/workorder-4',
    name: '待验证工单',
    component: require('@/pages/workorder/verificationworkorder')
  }, {
    path: '/systemnav/system-1',
    name: '用户管理',
    component: require('@/pages/system/users')
  }, {
    path: '/systemnav/system-2',
    name: '角色管理',
    component: require('@/pages/system/roles')
  }, {
    path: '/systemnav/system-3',
    name: '字典管理',
    component: require('@/pages/system/dict')
  }, {
    path: '/systemnav/system-4',
    name: '标签管理',
    component: require('@/pages/system/label')
  }, {
    path: '/systemnav/system-5',
    name: '邮件网关',
    component: require('@/pages/system/mail')
  }, {
    path: '/systemnav/system-6',
    name: '系统日志',
    component: require('@/pages/system/log')
  }]
};
exports.default = fullpath;
//# sourceMappingURL=fullpath.js.map
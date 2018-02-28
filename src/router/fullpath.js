var fullpath = {
  '1': [
    {
      path: '/homepage',
      icon: 'fa fa-home',
      name: '首页',
      component: require('@/pages/homepage')
    },
    {
      path: '/leaknav',
      name: '第二页',
      icon: 'fa fa-bug',
      component: require('@/pages/leaknav'),
      children: []
    },
    {
      path: '/workordernav',
      name: '第三页',
      icon: 'fa fa-clipboard',
      component: require('@/pages/workordernav'),
      children: []
    },
    {
      path: '/systemnav',
      name: '第四页',
      icon: 'fa fa-cogs',
      component: require('@/pages/systemnav'),
      children: []
    },
    {
      path: '/presentation',
      name: '第五页',
      icon: 'fa fa-file-word-o',
      component: require('@/pages/presentation')
    }
  ],
  '2': [
    {
      path: '/leaknav/leak-1',
      name: '第二页1',
      component: require('@/pages/leak/allleak')
    },
    {
      path: '/leaknav/leak-2',
      name: '第二页2',
      component: require('@/pages/leak/submitleak')
    },
    {
      path: '/leaknav/leak-3',
      name: '第二页3',
      component: require('@/pages/leak/examineleak')
    },
    {
      path: '/leaknav/leak-4',
      name: '第二页4',
      component: require('@/pages/leak/handleleak')
    },
    {
      path: '/leaknav/leak-5',
      name: '第二页5',
      component: require('@/pages/leak/verificationleak')
    },
    {
      path: '/workordernav/workorder-1',
      name: '第三页1',
      component: require('@/pages/workorder/allworkorder')
    },
    {
      path: '/workordernav/workorder-2',
      name: '第三页2',
      component: require('@/pages/workorder/handleworkorder')
    },
    {
      path: '/workordernav/workorder-3',
      name: '第三页3',
      component: require('@/pages/workorder/examineworkorder')
    },
    {
      path: '/workordernav/workorder-4',
      name: '第三页4',
      component: require('@/pages/workorder/verificationworkorder')
    },
    {
      path: '/systemnav/system-1',
      name: '第四页1',
      component: require('@/pages/system/users')
    },
    {
      path: '/systemnav/system-2',
      name: '第四页2',
      component: require('@/pages/system/roles')
    },
    {
      path: '/systemnav/system-3',
      name: '第四页3',
      component: require('@/pages/system/dict')
    },
    {
      path: '/systemnav/system-4',
      name: '第四页4',
      component: require('@/pages/system/label')
    },
    {
      path: '/systemnav/system-5',
      name: '第四页5',
      component: require('@/pages/system/mail')
    },
    {
      path: '/systemnav/system-6',
      name: '第四页6',
      component: require('@/pages/system/log')
    }
  ]
}
export default fullpath

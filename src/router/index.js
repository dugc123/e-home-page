import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
      {
        path: '/login',
        name: 'login',
        meta:{
          title:"登录"
        },
        component: ()=>import("@/view/login")
      },
      {
        path: '/user',
        name: 'user',
        meta:{
          title:"我的党建"
        },
        component: ()=>import("@/view/user")
      }, {
        path: '/know',
        name: 'know',
        meta: {
          title: "通知早知道"
        },
        component: () => import("@/view/know")
      }
      , {
        path: '/newseye',
        name: 'newseye',
        meta: {
          title: "信工新闻眼"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/newsDetail/:id',
        name: 'newsDetail',
        component: () => import("@/view/detail")
      }, {
        path: '/life',
        name: 'life',
        meta: {
          title: "掌上组织生活"
        },
        component: () => import("@/view/life")
      }, {
        path: '/userInfo',
        name: 'userinfo',
        meta: {
          title: "个人信息",
          requireAuth: true
          
        },
        component: () => import("@/view/userInfo")
      }, {
        path: '/ChangePassword',
        name: 'ChangePassword',
        meta: {
          title: "修改密码",
          requireAuth: true
        },
        component: () =>
          import("@/view/ChangePassword")
      }, {
        path: '/integral',
        name: 'integral',
        meta: {
          title: "个人量化积分",
          requireAuth: true
        },
        component: () =>
          import("@/view/integral/index")
      }, {
        path: '/pay',
        name: 'pay',
        meta: {
          title: "缴纳党费",
          requireAuth: true
        },
        component: () =>import("@/view/pay")
      }, {
        path: '/anytimephoto',
        name: 'anytimephoto',
        meta: {
          title: "随时随地拍"
        },
        component: () => import("@/view/anytimephoto")
      }, {
        path: '/oneclick',
        name: 'oneclick',
        meta: {
          title: "党建一点通"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/today',
        name: 'today',
        meta: {
          title: "党史上的今天"
        },
        component: () => import("@/view/today")
      }, {
        path: '/showidentity',
        name: 'showidentity',
        meta: {
          title: "党员亮身份"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/anytimestudy',
        name: 'anytimestudy',
        meta: {
          title: "随时随地学"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/System',
        name: 'System',
        meta: {
          title: "制度建设"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/activity',
        name: 'activity',
        meta: {
          title: "特色活动"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/study',
        name: 'study',
        meta: {
          title: "政治学习"
        },
        component: () => import("@/view/newsList")
      }, {
        path: '/integralDetail',
        name: 'integralDetail',
        meta: {
          title: "积分明细"
        },
        component: () => import("@/view/integral/detail")
      }, {
        path: '/updateInfo',
        name: 'updateInfo',
        meta: {
          title: "修改个人信息"
        },
        component: () => import("@/view/userInfo/updateInfo")
      },{
        path: '/findorg',
        name: 'findorg',
        meta: {
          title: "流动党员找组织"
        },
        component: () => import("@/view/organization/findorg")
      },
      {
        path: '/LifeChoice',
        name: 'LifeChoice',
        meta: {
          title: "掌上组织生活"
        },
        component: () => import("@/view/organization/LifeChoice")
      }, {
        path: '/personalsummary',
        name: 'personalsummary',
        meta: {
          title: "个人总结"
        },
        component: () => import("@/view/organization/personalsummary")
      }, {
        path: '/discuss',
        name: 'discuss',
        meta: {
          title: "民主评议"
        },
        component: () => import("@/view/organization/discuss")
      }, {
        path: '/interaction',
        name: 'interaction',
        meta: {
          title: "党员云互动",
          requireAuth: true
        },
        component: () => import("@/view/interaction")
      },
      {
        path: '/interactionDetail',
        name: 'interactionDetail',
        meta: {
          title: "党员云互动"
        },
        component: () => import("@/view/interaction/interactionDetail")
      },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

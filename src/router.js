import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/component/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/component/Dashboard')
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/component/pages/UserProfile')
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/component/component/Notifications')
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/component/component/Icons')
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/component/component/Typography')
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/component/tables/RegularTables')
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/component/maps/GoogleMaps')
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/component/Upgrade')
        }
      ]
    }
  ]
})

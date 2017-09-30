import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Dashboard from '@/components/Dashboard'
import Taskbar from '@/components/Taskbar'
import Settings from '@/components/Settings'
import Analysis from '@/components/Analysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
      path: '/taskbar',
      name: 'Taskbar',
      component: Taskbar
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    }
  ]
})

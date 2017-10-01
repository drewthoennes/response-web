import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Dashboard from '@/components/Dashboard'
import Taskbar from '@/components/Taskbar'
import Settings from '@/components/Settings'
import Analysis from '@/components/Analysis'
import Tags from '@/components/Tags'
import Questions from '@/components/Questions'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }, {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    }, {
      path: '/tags',
      name: 'Tags',
      component: Tags
    }, {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },  {
      path: '/question/:pollId',
      name: 'Question',
      component: Question
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
// import Practice from '../views/Practice'
import Index from '../views/Index'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Favor from '../components/Favor'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Practice',
  //   component: Practice
  // },
  {
    path:'/',
    name:'Index',
    component:Index,
    children:[
      {
        path:'/',
        name:'Login',
        component:Login,
        meta:{
          title:'請登入我的最愛系統'
        }
      },
      {
        path:'/signup',
        name:'Signup',
        component:Signup,
        meta:{
          title:'註冊系統'
        }
      },
      {
        path:'/favor',
        name:'Favor',
        component:Favor,
        meta:{
          title:'我的最愛清單'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

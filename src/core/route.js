/**
 * Created by Syun on 2016/12/14.
 * 路由配置页面
 */
import App from '../App'
import Find from '../pages/find/index'
import My from '../pages/my/index'
import Home from '../pages/home/index'
import Info from '../pages/info/index'

export default [
  {
    path:'/',
    component:App,
    children:[
      {
        path:'/find',
        name:'find',
        component:Find
      },
      {
        path:'/my',
        name:'my',
        component:My
      },
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/my/info/',
        name:'info',
        component:Info
      },
      {
        path:'*',
        redirect:'/home'
      }
    ]
  },


]

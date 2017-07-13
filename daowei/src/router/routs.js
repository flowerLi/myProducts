import Vue from 'vue'
import VueRouter from 'vue-router'

import first from '../components/first.vue'
import servy from '../components/servy.vue'
import login from '../components/login.vue'
import about from '../components/about.vue'
import cooperation from '../components/cooperation.vue'
import kong from '../components/kong.vue'
/*import type from '../components/type.vue'*/

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  mode:'history',
  routes:[
    { path:'/', redirect: "/first"},
    { path:'/kong', component:kong,},

    {
      path:'/first',component:first,
      /*children:[
        {
          path:'type',component:type,
        }
      ]*/

    },
    {
      path:'/servy',component:servy,

    },
    {
      path:'/login',component:login,

    },
    {
      path:'/cooperation',component:cooperation,

    },
    {
      path:'/about',component:about,

    },
    /*{
     path:'/home',component:home,
     children:[
     {path:'news',component:news},
     {
     path:'message',component:message,
     children:[
     {path:'detail/:id',component:detail}
     ]
     }
     ]
     }*/

  ]

})

import firebase from 'firebase';
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/login.vue'
import SignUp from '@/views/signUp.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
       path: "*",
       redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
          requiresAuth: true
      }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'signUp',
        component: SignUp
    }
  ]
});
router.beforeEach((to,from,next) =>{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !currentUser) next('login');
    else if(!requiresAuth && currentUser) next("home");
    else next();
});
export default router;

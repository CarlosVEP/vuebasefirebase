import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/segura',
      name: 'segura',
      component: Home,
      meta:{
        conectado: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue')
    }
  ]
})

router.beforeEach((to, from , next)=>{
  let usuario=firebase.auth().currentUser;
  let autorizado=to.matched.some(record=>record.meta.conectado);
  if(autorizado && !usuario){
    next('login');
  }else if(!autorizado && usuario){
    next('segura');
  }else{
    next();
  }
})
export default router;
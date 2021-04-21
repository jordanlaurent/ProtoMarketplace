import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Acceuil from '../views/Acceuil.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'
import PageProto from '../views/PageProto.vue'
import Profil from '../views/Profil.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/Acceuil',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion,
  },{
    path: '/inscription',
    name: 'Inscription',
   component: Inscription,
  },{
    path: '/Prototype',
    name: 'PageProto',
    component: PageProto,
  },{
    path: '/Profil',
    name: 'Profil',
    component: Profil,
  },
  {
    path: '*', 
    redirect: '/'
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

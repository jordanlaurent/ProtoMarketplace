<template>
<div >
  <Navbar-header />
<div class=" color1 AllCreateurDisplay row">
  <div class="pr-5 col text-center"  v-for="createur in createurs" :key="createur.info">
        <img class=" rounded-circle" width="140" height="140" :src="createur.photo" >
        <title>jordan</title>
        <h2>{{ createur.name }} {{ createur.last_name }}</h2>
        <p>{{ createur.email}}</p>
        <p>{{ createur.bio }}</p>
       <small >
         <button class="btn-danger btn-sm btn  ml-1" v-if="createur.active == 1"> Supprimer l'utilisateur </button></small>
      </div>
</div>
  <Footer />
</div>
</template>

<script>
const axios = require('axios');
import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "TOUT LES CREATEURS";
  },
  name: "TOUT_LES_CREATEURS",
  data () {
    return {
      createurs:null
    }
  },
  mounted () {
    var jwt = localStorage.getItem("jwt");
      if (jwt == null) {
         window.location = "/Connexion";
      } else {
        console.log("");
      }

    axios 
    .get('http://localhost:3000/api/users/getAll')
    .then(response =>
     (this.createurs = response.data))
  }
}
</script>

<style scoped>
@media (min-width: 1292px) {
.AllCreateurDisplay{ padding: 15rem; justify-content: space-evenly; flex-wrap: wrap;margin: 0;}
}
@media (max-width: 992px) {
.AllCreateurDisplay{ padding: 5rem; flex-wrap: wrap; margin: 0; }
}
</style>

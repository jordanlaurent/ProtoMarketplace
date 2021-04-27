<template>
<div class="color2 colorFont1">
  <Navbar-header />
    <div class="rowP ProfilDisplay " v-for="user in users" :key="user"> 
        <div class="color2 colorFont2 ">
            <br>
            <div class="column txtalign col mt-5">
               <a href=""><img class="imgProfilNavbar " src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/88241822_2898191913567063_5504142800486137856_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R5lrV8kCpbAAX9B_yt_&_nc_ht=scontent-frt3-1.xx&oh=8627c3f6c8ad0c41c02dd627bc4d98b3&oe=60A6764D" ></a>
                <div class="rowP txtalign mt-2">
                <h2 class="mr-3 text-warning">{{user.name}} </h2>
                <h2 class="text-warning"> {{user.last_name}} </h2>
                </div>
                <button  class="btn btn-light ml-3">MODIFIER PSEUDO</button>
            </div>
        </div>
        <div class="column mt-5 col "> 
            <div class="txtalign ">
            <h2> Informations </h2>
            <hr class="bg-dark">
            </div>
            <div class="txtalign">
            <h2 > Biographie </h2>
            <p class="text-warning">{{user.bio}} </p>
            <button  class="btn btn-light ml-3">MODIFIER BIO</button>
            <hr class="bg-dark">
            </div>
            <div class=" txtalign ">
                <div class="column ">
                    <h2>E-mail </h2>
                    <p class="pl-3 ">{{ user.email}}</p>
                    <button  class="btn btn-light ml-3">MODIFIER E-MAIL</button>
                </div>
                <hr class="bg-dark">
                <div class="column txtalign col">
                <h2> Mots de passe  </h2>
                <button  class="btn btn-light ">MODIFIER MOTS DE PASSE</button>
                </div>
            </div>
            <hr class="bg-dark">
            <div class="rowP txtalign  ">
                <div class="column ">
                    <h2>Nom Studio </h2>
                    <p>{{user.studio_name}}</p>
                </div>
                <div class="column txtalign col">
                <h2> Follower </h2>
                 <a href=""> 23 </a>
                </div>
                <div class="column txtalign col">
                <h2> Following </h2>
                  <a href=""> 323 </a>
                </div>
            </div>
                <hr class="bg-dark">
             <div class="txtJ">
                 <button class="btn btn-light mb-3">MES PROJETS </button>
            <button class="btn btn-danger mb-3">SUPPRIMER LE COMPTE </button>
            </div>
        </div>
    </div>
  <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
const axios = require('axios');
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "Profil";
  },
  name: "Profil",
    data() {
    return {
		users:"",
    };
	
  },
    mounted () {
    var jwt = localStorage.getItem("jwt");
      if (jwt == null) {
         window.location = "/Connexion";
      } else {
        console.log("");
      }
        axios.post("http://localhost:3000/user",
        {
            userid: localStorage.getItem("jwt"),
          }).then((response) => {
          this.users = response.data  
     })
   }
}
</script>


<style scoped>
.imgProfilNavbar{ max-width: 15rem;  border-radius: 50%;}
.ProfilDisplay{margin: 10rem; margin-right: 30rem;margin-left: 30rem; border: 4px solid; border-radius: 5px;}
.txtalign{text-align: center;}
.txtJ{justify-content: space-evenly; display: flex; }
@media (min-width: 1679px){ 
.column{display: flex; flex-direction: column;}
.rowP{display: flex; flex-direction: row;}
}
@media (max-width: 1678px){ 
.imgProfilNavbar{ max-width: 15rem;  border-radius: 50%;}
.ProfilDisplay{margin: 0rem; margin-right: 0rem;margin-left: 0rem; border: 0px solid; justify-content: center; text-align: center;}
}
</style>
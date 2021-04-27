<template>
<div  class="contactcolor">
    <Navbar-header />
    <div class="contactDisplay" >
        <div >
        <h2 class="text-warning"> contact@protomarketplace.fr </h2>
        <br>
        <h4><span class="text-warning"> TEL </span>: 14.02.19.95 </h4>
        <br>
        <h4><span class="text-warning">ADRESSE </span>: 26 Rue Des Elyser </h4>
        <br>
        <h4><span class="text-warning">VILLE </span> : Paris  90200  </h4>
        <hr>
        </div>
    </div>

    <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "Contact";
  },
  name: "Contact",
    mounted () {
    var jwt = localStorage.getItem("jwt");
      if (jwt == null) {
         window.location = "/Connexion";
      } else {
        console.log("");
      }
  }
}
</script>
<style scoped>
@media (min-width: 1040px){ 
.contactDisplay{ padding-top: 10%; padding-bottom: 10%;  display: flex; flex-direction: row; justify-content: center; text-align: center;}
.contactcolor{background-color: whitesmoke; min-height: 100%;min-width: 100%; position: absolute; }
}
@media (max-width: 1040px){ 
.contactDisplay{ padding-top: 40%;padding-bottom: 40%; text-align: center; overflow-wrap: break-word;}
.contactcolor{background-color: whitesmoke; max-width: 100%;max-height:100% ; }
}
</style>
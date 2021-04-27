<template>
<div >
  <Navbar-header />
  <ArticleTopHomePage/>
  <ThumbailProto />
  <NewProtoAcceuil />
  <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import ArticleTopHomePage from '../components/ArticleTopHomePage';
import ThumbailProto  from '../components/thumbailProto';
import NewProtoAcceuil from '../components/NewProtoAcceuil.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader, NewProtoAcceuil,Footer,ArticleTopHomePage,ThumbailProto },
  created: function () {
    document.title = "Acceuil";
  },
  name: "Acceuil",
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
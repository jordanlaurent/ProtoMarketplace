<template>
<div >
  <Navbar-header />
  <Slider-home-page />
  <NewProtoAcceuil />
  <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import NewProtoAcceuil from '../components/NewProtoAcceuil.vue';
import SliderHomePage from '../components/SliderHomePage.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader, SliderHomePage,NewProtoAcceuil,Footer },
  created: function () {
    document.title = "Acceuil";
  },
  name: "Acceuil",
}
</script>
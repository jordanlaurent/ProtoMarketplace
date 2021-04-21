<template>
<div>
  <Navbar-header />
  <SliderProto />
  <InfoProto />
  <CommentProto />
  <Footer />
</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import SliderProto from '../components/SliderProto.vue';
import InfoProto from '../components/InfoProto.vue';
import CommentProto from '../components/CommentProto.vue';
import NavbarHeader from '../components/NavbarHeader.vue';
export default {
   components: { Footer, NavbarHeader,SliderProto,InfoProto,CommentProto },
  name: "PageProto",
};
</script>
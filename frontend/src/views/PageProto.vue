<template>
<div>
  <Navbar-header />
  <SliderProto />
  <InfoProto />
  <CommentProto />
  <Newprotoacceuil/>
  <Footer />
</div>
</template>

<script>
export default {
  created: function () {
    document.title = "Prototip";
  },
  name: 'Prototip',
}
</script>

<script>
import Footer from '../components/Footer.vue';
import SliderProto from '../components/SliderProto.vue';
import InfoProto from '../components/InfoProto.vue';
import CommentProto from '../components/CommentProto.vue';
import NavbarHeader from '../components/NavbarHeader.vue';
import Newprotoacceuil from '../components/NewProtoAcceuil.vue';
export default {
   components: { Footer, NavbarHeader,SliderProto,InfoProto,CommentProto,Newprotoacceuil },
  name: "PageProto",
};
</script>
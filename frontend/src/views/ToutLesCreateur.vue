<template>
<div >
  <Navbar-header />
<div class=" color1 AllCreateurDisplay row">
  <div class="pr-5">
        <img class=" rounded-circle" width="140" height="140" src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/88241822_2898191913567063_5504142800486137856_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R5lrV8kCpbAAX9B_yt_&_nc_ht=scontent-frt3-1.xx&oh=8627c3f6c8ad0c41c02dd627bc4d98b3&oe=60A6764D" >
        <title>jordan</title>
        <h2>jordan laurent</h2>
        <p></p>
       <small >
         <button class="btn-danger btn-sm btn  ml-1"> Supprimer l'utilisateur </button></small>
      </div>
     <div class="pr-5">
        <img class=" rounded-circle" width="140" height="140" src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/88241822_2898191913567063_5504142800486137856_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R5lrV8kCpbAAX9B_yt_&_nc_ht=scontent-frt3-1.xx&oh=8627c3f6c8ad0c41c02dd627bc4d98b3&oe=60A6764D" >
        <title>jordan</title>
        <h2>jordan laurent</h2>
        <p></p>
       <small >
         <button class="btn-danger btn-sm btn  ml-1"> Supprimer l'utilisateur </button></small>
      </div>
       <div class="pr-5">
        <img class=" rounded-circle" width="140" height="140" src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/88241822_2898191913567063_5504142800486137856_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R5lrV8kCpbAAX9B_yt_&_nc_ht=scontent-frt3-1.xx&oh=8627c3f6c8ad0c41c02dd627bc4d98b3&oe=60A6764D" >
        <title>jordan</title>
        <h2>jordan laurent</h2>
        <p></p>
       <small >
         <button class="btn-danger btn-sm btn  ml-1"> Supprimer l'utilisateur </button></small>
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
    document.title = "TOUT LES CREATEURS";
  },
  name: "TOUT LES CREATEURS",
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

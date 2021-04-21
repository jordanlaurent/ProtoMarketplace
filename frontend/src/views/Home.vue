<template>
<body id="loginflat"> 
  <section class="centerTxt colorFont1 "> 
    <img class="pb-5 w-50" src="../assets/logo.webp">
    <h2 class="pb-3">HAVE FUN <span class="colorFont2">!</span> CREATE <span class="colorFont2"> GREAT GAMES </span> </h2>
    <h3 class="inline">Recceuillez des avis sur votre <span class="colorFont2"> Proto </span>, <span class="colorFont2">Corriger </span> le,<span class="colorFont2"> Commercialiser </span> le ! </h3>
      <div class="mt-4">
        <router-link to="Connexion" type="button" class="btn btn-success mr-5"> Connexion </router-link>
        <router-link to="Inscription" type="button" class="btn btn-light"> Inscription </router-link>
      </div>
  </section>
</body>
</template>

<script>


export default {
  created: function () {
    document.title = "DEV PROTOTIPS";
  },
  name: 'Home',
}
</script>
<style>
#template{background-color: violet;}
.centerTxt{position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%); text-align: center;}
#loginflat {
  background-image:linear-gradient(rgba(27, 34, 46, 0.842), rgba(27, 34, 46, 0.726)), url("../assets/homeBackround.jpg") ;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
}
</style>
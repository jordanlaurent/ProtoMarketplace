<template>
<body> 
  <section class="centerTxt colorFont3 colorWTSP HomeDesign  SizeMbHome DisplayMbHome"> 
    <img class="pb-5 mx-auto d-block" src="../assets/logo.webp">
    <h3 class="pb-3 ">HAVE FUN ! CREATE <span class="colorFont3"> GREAT GAMES </span> </h3>
    <h5 class="inline pb-3">Recceuillez des avis sur votre Proto, Corriger le, Commercialiser le ! </h5>
      <div class="mt-4 ">
        <router-link to="Connexion" type="button" class="btn btn-dark mr-4"> CONNEXION </router-link>
        <router-link to="Inscription" type="button" class="btn btn-light"> INSCRIPTION </router-link>
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
@media (max-width: 1040px){ 
.DisplayMbHome{display: flex; flex-direction: column;position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%); text-align: center; }
.SizeMbHome{min-width: 100%; min-height: 100%; justify-content: center;}
}
@media (min-width: 1040px){ 
.SizeMbHome{padding: 5rem;}
}
.HomeDesign{border-radius: 4px;}
.centerTxt{position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%); text-align: center;}

html,body{
background-image: linear-gradient(0.25turn,rgba(0, 0, 0, 0.74), rgba(245, 244, 244, 0.658)),url("https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_960_720.jpg");
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}
</style>
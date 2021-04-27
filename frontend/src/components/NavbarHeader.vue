<template>
  <nav class="navbar navbar-expand-lg navbar-light color1 navbarHeader">
  <router-link to="Acceuil" class="btn" ><img src="../assets/logo.webp" width="155px"  class="navbar-brand"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="Acceuil">ACCEUIL </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORIES
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">JEUX VIDEO</a>
          <a class="dropdown-item" href="#">LOGICIEL</a>
          <a class="dropdown-item" href="#">DEVELOPPEMENT WEB</a>
          <div class="dropdown-divider"></div>
          <router-link to="Prototype" class="dropdown-item" href="#"><span class="FontColor1"> ★★★★☆ | </span> DESKTOP FARM </router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="ToutLesCreateur">TOUS LES CREATEURS</router-link>
      </li>
            <li class="nav-item">
        <a class="nav-link " href="#">FAVORIS</a>
      </li>
       <li class="nav-item">
        <router-link class="nav-link text-warning" to="TelechargerVotrePrototype">TELECHARGER VOTRE PROTOTYPE</router-link>
      </li> 
      <li class="nav-item">
        <router-link class="nav-link text-dark" to="Contact">CONTACT</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 btn-dark" type="search" placeholder="Gta v , WOW , Fortnite ..." aria-label="Recherche">
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Rechercher</button>
    </form>
     <button v-on:click="disconnect" class="btn btn-danger m-2">Deconnecter</button>
      <router-link to="Profil"><img class="imgProfilNavbar " src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/88241822_2898191913567063_5504142800486137856_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R5lrV8kCpbAAX9B_yt_&_nc_ht=scontent-frt3-1.xx&oh=8627c3f6c8ad0c41c02dd627bc4d98b3&oe=60A6764D" ></router-link>
  </div>
</nav>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 methods: {
      disconnect(){
      localStorage.clear();
      window.location = "/Connexion";
    },
 }
}
</script>

<style scoped>
.imgProfilNavbar{ max-width: 6rem; margin-left: 3rem; border-radius: 50%;}
.navbarHeader{ border-color: #000;border-width: 0 0 1px;border-style:solid ;}
</style>

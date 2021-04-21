<template>
  <nav class="navbar navbar-expand-lg navbar-dark color1 ">
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
          CATEGORIE
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">TOUT LES PROTOTYPE</a>
          <a class="dropdown-item" href="#">Action / Aventure</a>
          <a class="dropdown-item" href="#">Course </a>
          <a class="dropdown-item" href="#">Strategie / Reflexion</a>
          <div class="dropdown-divider"></div>
          <router-link to="Prototype" class="dropdown-item" href="#"><span class="FontColor1"> ★★★★☆ | </span> DESKTOP FARM </router-link>
        </div>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">TELECHARGER VOTRE PROTOTYPE</a>
      </li>
            <li class="nav-item">
        <a class="nav-link text-warning" href="#">FAVORIS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-info" href="#">CONTACT</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Gta v , WOW , Fortnite ..." aria-label="Recherche">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
    </form>
  </div>
</nav>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>

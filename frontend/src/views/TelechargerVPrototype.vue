<template>
<div >
  <Navbar-header />

  <form class="color1 p-5">
  <!-- Nom studio / Nom du prototype -->
  <div class="row mb-4">
    <div class="col text-center">
      <div class="form-outline">
        <h3 class="form-label text-warning" for="form6Example2">Nom du Prototype</h3>
        <input type="text" id="form6Example2" class="form-control" placeholder="Desktop Farm" />
      </div>
    </div>
  </div>

  <!-- Langue Prototype -->
  <div class="displayCtg pt-3"> 
      <div>
  <h5 class="text-center">Langue du Prototype </h5>
  <div class="form-outline mb-4 col text-center ">
     <div class="btn-group"> 
   <button type="button" class="btn btn-dark dropdown-toggle"
data-toggle="dropdown">Choisissez <span class="caret"></span></button>
   <ul class="dropdown-menu bg-dark  text-center" role="menu"> 
      <li><a class="colorFont1" href="#">Francais</a></li> 
      <li><a class="colorFont1" href="#">Anglais</a></li> 
      <li><a class="colorFont1" href="#">Espagnol</a></li> 
   </ul> 
</div>
  </div>
      </div>
<!-- Categorie du prototype -->
<div class="col">
  <h5 class="text-center">Catégorie du Prototype </h5>
  <div class="form-outline mb-4 text-center col">
     <div class="btn-group"> 
   <button type="button" class="btn btn-dark dropdown-toggle"
   data-toggle="dropdown">Choisissez <span class="caret"></span></button>
   <ul class="dropdown-menu bg-dark" role="menu"> 
      <li><a class="colorFont1" href="#">Developpement Web</a></li> 
      <li><a class="colorFont1" href="#">Logiciel</a></li> 
      <li><a class="colorFont1" href="#">Jeux Video</a></li> 
   </ul> 
</div>
  </div>
</div>
  <!-- Telecharger prototype / patchnote -->
  <div class="form-outline mb-4  ">
      <div>
      <h5>PATCHNOTE EN   .pdf </h5>
      <br>
    <input type="file" id="file"  ref="file" accept="file/pdf" class="mt-2 mb-2" >
      </div>
      <hr>
    <div>
      <h5>PROTOTYPE EN  .zip (MAX 10 MO) </h5>
      <br>
    <input type="file" id="file"  ref="file"  accept="file/.zip" class="mt-2 mb-2" >
  </div>
  </div>
  </div>

   <!-- Version du prototype -->
  <div class="row mb-4">
    <div class="col text-center">
      <div class="form-outline">
        <h5 class="form-label text-warning" for="form6Example2">Version du Prototype</h5>
        <input type="text" id="form6Example2" class="form-control"  placeholder=" EX: 0.33.423"/>
      </div>
    </div>
  </div>
     <!-- Telecharger 3 image -->
  <div class="row mb-4">
    <div class=" col form-outline">
    <h5 class="text-center text-warning">TELECHARGER JUSQU'A 3 IMAGES (MAX 10 MO) </h5>
      <br>
    <input type="file" id="file"  ref="file"  accept="image/jpg image/png" class="mt-2 mb-2" >
    <input type="file" id="file"  ref="file"  accept="image/jpg image/png" class="mt-2 mb-2" >
    <input type="file" id="file"  ref="file"  accept="image/jpg image/png" class="mt-2 mb-2" >
    </div>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="form6Example7">Description du prototype</label>
    <textarea class="form-control" id="form6Example7" rows="4" placeholder="Prototype centrer sur un jeux de farm aux mecanique innovante. Dans cette vrsion du proto il est possible de tester l'agriculture de niveaux 1"></textarea>
  </div>


  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Mettre en ligne</button>
</form>

  <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "Telecharger Votre Prototype";
  },
  name: "Telecharger Votre Prototype",
}
</script>

<style scoped>
.checkboxStyle{overflow-wrap: break-word;}
@media (min-width: 1040px){ 
.displayCtg{display: flex;justify-content: space-evenly; }
}
</style>
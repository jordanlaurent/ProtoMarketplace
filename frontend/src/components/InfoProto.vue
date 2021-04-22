<template>
<section class="colorFont1 Pres color2 pb-5">
    <img class=" w-25 mx-auto d-block " src="https://media.st.dl.pinyuncloud.com/steam/apps/1357610/library_600x900.jpg" >
    <div class="textPres ml-3">
    <h1> Farm village </h1>
        <ul> 
            <li>Catégorie : Jeux video</li>
            <li >Développeur : <a class="text-warning" href=""> JORDAN LAURENT</a></li>
            <li>Langages : Anglais</li>
            <li>Derniere mise a jour : 19/04/2021</li>
        </ul>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
    <br>
    <button class="btn btn-dark mx-auto d-block"> Voir les autres projets du développeur </button>
    <br>
    </div>
    <aside> 
        <h3 class="pb-3 btnDownload"> Version : 0.3</h3>
       <button class="btn btn-dark btnDownload mb-5"> TELECHARGER LE PATCHNOTE</button>
        <button class="btn btn-warning btnDownload "> TELECHARGER LE PROTOTYPE</button>
    </aside>
</section>
</template>

<style>
@media (min-width: 1040px){ 
.Pres{ padding-top: 3%; padding-left: 3%; display: flex; flex-direction: row;}
.textPres{width: 40%;}
}
.Pres{ padding-top: 5%; padding-left: 5%; }
.textPres{width: 90%;  }
.btnDownload{ position: relative;left: 50%;transform: translateX(-50%); text-align: center; }
</style>
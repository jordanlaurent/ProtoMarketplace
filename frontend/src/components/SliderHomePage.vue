<template>
<div id="carouselExampleIndicators" class="carousel slide"  data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">bonjour</li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner carouselSize sliderAcceuil">
    <div class="carousel-item active">
      <img class="d-block w-100 " src="https://i.pinimg.com/originals/71/f8/73/71f8736c3628d4661156b62a4d68781f.jpg" alt="First slide">
    </div>
    <div class="carousel-item carouselSize">
      <img class="d-block w-100" src="https://www.wallpapertip.com/wmimgs/80-806274_video-game-characters-wallpapers-mobile-with-hd-wallpapers.png" alt="Second slide">
    </div>
    <div class="carousel-item carouselSize">
      <img class="d-block w-100" src="https://wallpaperaccess.com/full/7445.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<style>
.sliderAcceuil { max-height: 30em;}
</style>
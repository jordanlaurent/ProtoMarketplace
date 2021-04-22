<template>
  <div id="body" >
    <router-view  />
  </div>
</template>

<style>
.color1{ background-color: whitesmoke ;}
.color2{background-color: #161616;}
.color3{background-color: rgba(12, 11, 11, 0.931);}
.colorWTSP{background-color: rgba(255, 255, 255, 0.5) !important;}
.colorFont1 {color: white;}
.colorFont3{color: black;}
.colorFont2{color: #f5f5f5 ;}
p,h1,h2,h3,h4,h5,h6,a{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
.FontGrass{font-weight: bold;}

@media (max-width: 1040px){ 
body{background-image: linear-gradient(0.25turn,rgba(0, 0, 0, 0.74), rgba(245, 244, 244, 0.658)),url("https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_960_720.jpg");}
}
@media (min-width: 1040px){ 
body{background-image: linear-gradient(0.25turn,rgba(0, 0, 0, 0.74), rgba(245, 244, 244, 0.658)),url("https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_960_720.jpg");}
}
</style>

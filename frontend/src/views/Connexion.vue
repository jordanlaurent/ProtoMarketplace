<template>
  <div class="container centerTxt ">
	<div class="d-flex justify-content-center h-100">
		<div class="card colorWTSP">
			<div class="card-header">
				<h3>CONNEXION</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-person " viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></span>
						</div>
						<input type="text" class="form-control" placeholder="Nom d'utilisateur">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
						</div>
						<input type="password" class="form-control" placeholder="Mots de passe">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Se souvenir de moi
					</div>
					<div class="form-group">
						<router-link to="Acceuil" type="submit" class="btn btn-dark float-right login_btn"> Connexion</router-link>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Vous n'avez pas de compte  ?<router-link to="Inscription">Crée un compte</router-link>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Mots de passe oubliez ?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  created: function () {
    document.title = "Connexion";
  },
  name: "Connexion",
};
</script>
<style>

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #1b222e;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #ffffff;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: rgb(250, 245, 245);
background-color: #1b222e;
width: 100px;
white-space: nowrap;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>
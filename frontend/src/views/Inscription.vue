<template>
  <div class="row ">
        <div class=" well well-sm centerTxt">
            <legend class="colorFont1 ">Inscription !</legend>
            <form action="#" method="post" class="form" role="form">
            <div class="row pb-3">
                <div class="col-xs-6 col-md-6">
                    <input class="form-control" name="Prenom" placeholder="Prenom" type="text"
                        required autofocus />
                </div>
                <div class="col-xs-6 col-md-6">
                    <input class="form-control" name="Nom" placeholder="Nom" type="text" required />
                </div>
            </div>
            <input class="form-control mb-3" name="youremail" placeholder="Adresse Email" type="email" />
            <input class="form-control mb-3" name="password" placeholder="Mots de passe" type="password" />
            <div class="form-group text-light">
        <label for="file" class="label-profil-group mr-2" id="label-file">Image de profil  </label>
        <input type="file" id="file" name="image" ref="file" accept="image/png, image/jpeg, image/jpg">
      </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit"> Inscription</button>
            </form>
            <div class="d-flex justify-content-center links pt-3">
					Vous avez déja un compte  ?<router-link to="Connexion">Connexion</router-link>
				</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Inscription",
};
</script>
<template>
  <div class="row ">
        <div class=" well well-sm centerTxt colorWTSP p-2">
            <legend class="colorFont1 ">Inscription !</legend>
            <form @submit="postData" method="post" class="form " role="form">
            <div class="row pb-3">
                <div class="col-xs-6 col-md-6">
                    <input id="name" class="form-control" name="name" placeholder="Prenom" type="text" v-model="name"
                        required autofocus />
                </div>
                <div class="col-xs-6 col-md-6">
                    <input id="last_name" class="form-control" name="last_name" placeholder="Nom" type="text" v-model="last_name" required />
                </div>
            </div>
             <input id="studio_name" class="form-control mb-3" name="studio_name" placeholder="Nom du studio" type="text" v-model="studio_name" required />
            <input id="email" class="form-control mb-3" name="email" placeholder="Adresse Email" type="email" v-model="email" required />
            <input id="password" class="form-control mb-3" name="password" placeholder="Mots de passe" type="password" v-model="password" required />
            <div class="form-group text-light">
        <label for="file" class="label-profil-group mr-2" id="label-file">Image de profil  </label>
        <input  type="file" id="file" name="image" ref="file" accept="image/png, image/jpeg, image/jpg">
      </div>
      <section class="popup" v-if="errors">
          <p class=" text-dark FontGrass">{{errors}}</p>
        </section>
            <button class="btn btn-lg btn-primary btn-block" type="submit"> Inscription</button>
            </form>
            <div class="d-flex justify-content-center links pt-3">
					Vous avez déja un compte  ?<router-link to="Connexion">Connexion</router-link>
				</div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Inscription",
   data() {
    return {
      email: '',
      password: "",
      name: "",
      last_name:"",
      studio_name:"",
      errors:'',
    };
  },
  methods: {
    postData(e) {
        e.preventDefault();
      var optionAxios = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
     axios
        .post(
          "http://localhost:3000/api/users/signup",
          {
            email: this.email,
            password: this.password,
            name: this.name,
            last_name:this.last_name,
            studio_name: this.studio_name,
          },
          { optionAxios }
        )
        .then(() => {
            this.$router.replace({ name: "Connexion" });
        })
        .catch((error) => {
           (this.errors = error.response.data);
        });
    }
  },

};
</script>
<style scoped>

</style>
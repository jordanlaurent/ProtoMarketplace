const User = require("../models/users.model.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = "RANDOM_TOKEN_SECRET";

// create account users
exports.create = (req, res) => {
    let email = req.body.email
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!req.body){
        res.status(400).send({
            message:"Le contenue ne peut etre vide"
        });
    }
    if (!email.match(emailformat)){
        return res.status(400).send({ error: "L'adresse mail doit etre correctement remplie" });
    } 
    User.findOneByMail(email, (err,data) => {
        if (err) {
            return res.status(500).json({ error: "erreur serveur" })
        } else if (data > 0) {
            return res.status(409).send( "L'adresse mail est deja attacher a un compte" );
        } else {
            bcrypt.hash(req.body.password, 10)
            .then(hashmotdepasse => {
                const user = new User ({
                    email: email,
                    name: req.body.name,
                    last_name: req.body.last_name,
                    studio_name: req.body.studio_name,
                    password: hashmotdepasse,
                });
  
            User.create (user, (err,data) => {
            if (err) {
            res.status(500).send({error: " Une erreur est apparue lors de la creation de l'utilisateur"});
            } else { 
                res.send(data);
            }
        });
        })
    .catch(error => res.status(500).json({ error: "Entrer un mots de passe valide" }));
    };
    })
};


//connecter un utilisateur
exports.login = (req, res) => {
    let email = req.body.email;
    User.login(email, (err, data) => {
      if (data.length == 0 ) {
        res.status(400).send({ error: "Cette adresse mail n'existe pas" })
      } else {
        let password = req.body.password;
        bcrypt.compare(password, data[0].password)
          .then(valid => {  
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              id: data[0].id,
              token: jwt.sign({ id: data[0].id },
                'RANDOM_TOKEN_SECRET', { expiresIn: '94h' }
              )
            });
          })
      }
    })
  };

// modifier un utilisateur 
exports.updateMail = (req,res) => {
    if (!req.body){
        res.status(400).send({
            message:"Aucune modification envoyé"
        });
    }
    User.updateMailById(
        req.params.id,
        new User(req.body),
        (err,data) => {
            if (err){
                if (err.kind == "non trouver"){
                    res.status(500).send({
                        message: `Id de l'utilisateur non trouvé ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: "Erreur de mise a jour de l'utilisateur avec cette id" + req.params.id
                    });
                }
            }else res.send(data);
        }
    );
};

// Mettre a jour le mot de passe
exports.updatePassword = (req,res) => {
    if (!req.body){
        res.status(400).send({
            message:"Aucune modification envoyé"
        });
    }
    User.updatePasswordById(
        req.params.id,
        new User(req.body),
        (err,data) => {
            if (err){
                if (err.kind == "non trouver"){
                    res.status(500).send({
                        message: `Id de l'utilisateur non trouvé ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: "Erreur de mise a jour de l'utilisateur avec cette id" + req.params.id
                    });
                }
            }else res.send(data);
        }
    );
};

// Mettre a jour la photo
exports.updatePhoto = (req,res) => {
    if (!req.body){
        res.status(400).send({
            message:"Aucune modification envoyé"
        });
    }
    User.updatePhoto(
        req.params.id,
        new User(req.body),
        (err,data) => {
            if (err){
                if (err.kind == "non trouver"){
                    res.status(500).send({
                        message: `Id de l'utilisateur non trouvé ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: "Erreur de mise a jour de l'utilisateur avec cette id" + req.params.id
                    });
                }
            }else res.send(data);
        }
    );
};

// suprimer un utilisateur
exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Cette utilisateur n'a pas ete trouver avec l'id :  ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Utilisateur non supprimer avec cette id:" + req.params.customerId
          });
        }
      } else res.send({ message: `L'utilisateur a bien ete supprimer !` });
    });
  };


// recuperer info de l'utilisateur connecter
exports.findOne = (req, res) => {
    let token = req.body.userid;
    let decodeToken = jwt.verify(token, tokenSecret);
    let id = decodeToken.id;
    User.findOne(id,(err, data) => {
      if (err)res.status(500).send({message:err.message || "Some error occurred while retrieving post."});
      else res.send(data);
      });
  };

// liste de tout les users 
exports.findAll = (req, res) => {
    User.getAll ((err,data) => {
        if (err)
        res.status(500).send ({
            message:
            err.message || "Une erreur est survenue lors de la recuperation des utilisateur"
        });
        else res.send(data);
    });
  
};

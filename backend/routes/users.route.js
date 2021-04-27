const express = require("express");
const verifyPassword = require('../middleware/verifyPassword');
const router = express.Router();

const users = require("../controllers/users.controller.js");

    // create users
    router.post("/api/users/signup",verifyPassword, users.create);

    // Recuperer info user
    router.post("/user", users.findOne);

    // mise a jour de l'utilisateur via son id 
    router.put('/api/users/update/mail/:id',  users.updateMail);
    router.put('/api/users/update/password/:id', users.updatePassword );
    router.put('/api/users/update/photo/:id', users.updatePhoto );

    // Suprimer le compte avec via son id 
    router.delete('/api/users/delete/:id', users.delete);

    // Liste de tout les users 
    router.get("/api/users/getAll", users.findAll);

    // Connection utilisateur
    router.post("/api/users/login", users.login)

    module.exports = router;

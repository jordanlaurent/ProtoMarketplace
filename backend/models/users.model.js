const { use } = require("../app.js");
const sql = require("./db.js");

const Users = function(user){
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.last_name = user.last_name;
    this.studio_name= user.studio_name;
    this.password = user.password;
    this.bio = user.bio;
    this.active = user.active;
    this.photo = user.photo;
}

// cree un utilisateur
Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err,res) => {
        if(err){
            console.log("error:",err);
            result(err,null);
            return
        }
        console.log("created users: ", {id:res.insertId, ...newUser});
        result(null, {id:res.insertId, ...newUser});
    });
};

// recherche si l'utilisateur est présent dans la base de donné
Users.findOneByMail = (email, result) => {
  sql.query("SELECT * FROM users WHERE email = ? " , email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
      } else if (res.length === 0) {
      result(null, res.length);
      return;
    } else if (res.length > 0){
      result(null, res.length);
      return;
    }
  });
}

// connecter un utilisateur
Users.login = (email,password, result ) => {
  sql.query("SELECT * FROM users WHERE email = ? ", email,password, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found users: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found users with the id
    result({ kind: "not_found" }, null);
  });
};

// recuperation info utilisateur connecter
Users.findOne = (id,result) => {
  sql.query("SELECT * FROM users WHERE id = ?",id,(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

// mise a jour de l'email de  l'utilisateur avec son id
Users.updateMailById = (id, users, result) => {
    sql.query(
      "UPDATE users  SET email = ? WHERE id = ?" ,
      [users.email, id],
      (err, res) => {
        if (err) {
          result(err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // users non trouver avec son id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated users: ", { id: id, ...users });
        result(null, { id: id, ...users });
      }
    );
  };

  // mise a jour du mots de passe
  Users.updatePasswordById = (id, users, result) => {
    sql.query(
      "UPDATE users  SET password = ? WHERE id = ?" ,
      [users.password, id],
      (err, res) => {
        if (err) {
          result(err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // users non trouver avec son id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated users: ", { id: id, ...users });
        result(null, { id: id, ...users });
      }
    );
  };

 // mise a jour du mots de passe
 Users.updatePhoto = (id, users, result) => {
    sql.query(
      "UPDATE users  SET photo = ? WHERE id = ?" ,
      [users.photo, id],
      (err, res) => {
        if (err) {
          result(err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // users non trouver avec son id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated users: ", { id: id, ...users });
        result(null, { id: id, ...users });
      }
    );
  };
// supprimer un utilisateur avec son id
  Users.remove = (id, result) => {
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // utilisateur non trouver avec cette id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted utilisateur with id: ", id);
      result(null, res);
    });
  };

// recuperer liste de tout les ustilisateur
Users.getAll = result => {
    sql.query("SELECT email, name, last_name, studio_name , bio , photo ,active  FROM users", (err,res) => {
        if (err){
            console.log("error: ", err)
            result(null,err);
            return;
        }
        console.log("users: ", res);
        result(null, res);
    });
};



module.exports = Users;
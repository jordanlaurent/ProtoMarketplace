const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require('./routes/users.route');

const app = express();

//Erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next()
    app.options('*', (req, res) => {
        // allowed XHR methods
        res.header(
          'Access-Control-Allow-Methods',
          'GET, PATCH, PUT, POST, DELETE, OPTIONS',
        )
        res.send()
      })
});

app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(usersRoutes);


module.exports = app;
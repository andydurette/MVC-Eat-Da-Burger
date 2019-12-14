// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

// Module Dependencies
const connection = require("./config/connection");

// Create an instance of the express app.
var app = express();

// Added so body parser can handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public')));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 9090;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes

// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgers: data });
    //connection.end();
  });
});

//


app.get("/", function(req, res) {
  res.render("index", {
    foods: viewBurgers()
  });
});


//Handling requests

/*  POST REQUEST */
app.post('/api/addBurger', (req, res) => {
  console.log(req.body);
  connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ('${req.body.burger_name}', false);`, function(err, data) {
    if (err) {
      return res.status(500).end();
    }
  });
  res.send('200');
  //connection.end();
});


// End of request Handling


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
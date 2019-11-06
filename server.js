

//Requires
var express = require("express");
var path = require("path");

//Instantiate app with express function and methods
var app = express();

//Local host port or Heroku
PORT = process.env.PORT || 5500;


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Application Routes being put into a variable
htmlRoutes = require(path.join(__dirname, 'app/routing/htmlRoutes'));
apiRoutes = require(path.join(__dirname, 'app/routing/apiRoutes'));

// Shorthand to pass to the server the Routes.
htmlRoutes(app);
apiRoutes(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
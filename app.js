//required modules
var express = require( "express" );
var session = require('express-session');
var http    = require( "http" );

//dependency injection
var config   = require( "./config.js" );
var myRoutes = require( "./routes/myRoutes.js" );

var app      = express();

// Set session secret key
app.use(session({secret: 'magbog'}));
// Middleware to load static files
app.use( express.static( __dirname  + '/public' ) );
console.log(__dirname);
//routing logic
app.get('/login/:username/:password', myRoutes.login);
app.get('/signup/:fname/:lname/:email/:pswd/:cpswd', myRoutes.signup);
app.get('/home', myRoutes.home);
app.get('*', myRoutes.defaultPage);


//server listening in port
app.listen(config.port, function() {
   console.log('Express server listening on port ' , config.port);
} );

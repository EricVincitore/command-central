const express = require("express");
const path = require("path"); 
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var User = require('./models/user')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku) **check for server issues*
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

const apiRoutes = require("./routes/apiRoutes")
apiRoutes(app);

//connection to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/commandCentral');


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
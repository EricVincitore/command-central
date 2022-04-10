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
const uri = process.env.MONGODB_URI;


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
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  // });
};

const apiRoutes = require("./routes/apiRoutes")
apiRoutes(app);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/commandCentral');


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
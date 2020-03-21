var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var passport = require("passport")
var Schema = mongoose.Schema;

// User Schema
var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index:true,
    unique: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  wishList: {
    type: [{type: Schema.Types.ObjectId, ref: "Cards"}]
  }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
}

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
  clientID: "203985757544655",
  clientSecret: "d664c01bc5c2189e4d9be834a4bbfb5cReset",
  callbackURL: "https://cors-anywhere.herokuapp.com/command-central.herokuapp.com/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log(profile)
  User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
    if (err) return done(err);
    if (user) return done(null, user);
    else {
      // if there is no user found with that facebook id, create them
      var newUser = new User();

      // set all of the facebook information in our user model
      newUser.facebook.id = profile.id;
      newUser.facebook.token = accessToken;
      newUser.facebook.name  = profile.displayName;
      if (typeof profile.emails != 'undefined' && profile.emails.length > 0)
        newUser.facebook.email = profile.emails[0].value;

      // save our user to the database
      newUser.save(function(err) {
        if (err) throw err;
        return done(null, newUser);
      });
    }
  });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

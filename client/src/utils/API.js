import axios from "axios";

export default {

  search: function(query) {
    try {
      return axios.get("/api/scryfall/" + query);
    } catch (error) {
      console.error(error)
    }
  },

  metagame: function() {
    try {
      return axios.get("/metagamescrape");
    } catch (error) {
      console.error(error)
    }
  },

  edhRec: function() {
    try {
      return axios.get("/edhrecscrape");
    } catch (error) {
      console.error(error)
    }
  },

  commandZone: function() {
    try {
      return axios.get("/czscrape");
    } catch (error) {
      console.error(error)
    }
  },

  cc: function() {
    try {
      return axios.get("/ccscrape");
    } catch (error) {
      console.error(error)
    }
  },

  //TODO: add try catch to functions below 
  
  signUp: function(newUser) {
    return axios.post("/register", newUser).catch(error => {
      console.log(error)
    });
  },

  SaveCard: function(newCard) {
    return axios.post("/api/saveCard", newCard)
  },

  getCards : function() {
    return axios.get("/api/cards")
  },

  Login: function(user) {
    return axios.post("/login", user)
  },

  User: function() {
    return axios.get("/user")
  },

  logout: function() {
    return axios.get("/logout")
  }
  
};
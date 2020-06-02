import axios from "axios";

export default {

  search: function(query) {
    return axios.get("/api/scryfall/" + query);
  },

  metagame: function() {
    return axios.get("/metagamescrape");
  },

  edhRec: function() {
    return axios.get("/edhrecscrape");
  },

  commandZone: function() {
    return axios.get("/czscrape");
  },

  cc: function() {
    return axios.get("/ccscrape");
  },

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
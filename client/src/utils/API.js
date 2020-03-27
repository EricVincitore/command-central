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

  tcc: function() {
    return axios.get("/tccscrape");
  },

  signUp: function(newUser) {
    return axios.post("/register", newUser);
  },

  SaveCard: function(newCard) {
    return axios.post("/api/saveCard", newCard)
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

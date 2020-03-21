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
    return axios.post("/register", newUser)
  },

  FBLogin: function(user) {
    return axios.get("/auth/facebook", user);
  },

  login: function(user) {
    return axios.post("/login", user)
  },

  user: function() {
    return axios.get("/user")
  },

  logout: function() {
    return axios.get("/logout")
  },

  getCards: function() {
    return axios.get("/api/cards");
  },
  
  getCard: function(id) {
    return axios.get("/api/cards/" + id);
  },
  
  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  
  saveCard: function(CardData) {
    return axios.post("/api/cards", CardData);
  }
  
};

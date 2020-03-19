import axios from "axios";

export default {

  search: function(query) {
    return axios.get("/api/scryfall/" + query);
  },

  metagame: function() {
    return axios.get("/metagameScrape");
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

  login: function(user) {
    return axios.post("/login", user)
  },

  user: function() {
    return axios.get("/user")
  },

  logout: function() {
    return axios.get("/logout")
  }
  
};

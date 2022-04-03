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
  
  signUp: function(newUser) {
    try {
      return axios.post("/register", newUser).catch(error => {
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    }
  },

  SaveCard: function(newCard) {
    try {
      return axios.post("/api/saveCard", newCard)
    } catch (error) {
      console.error(error)
    }
  },

  getCards : function() {
    try {
      return axios.get("/api/cards")
    } catch (error) {
      console.error(error)
    }

  },

  Login: function(user) {
    try {
      return axios.post("/login", user)
    } catch (error) {
      console.error(error)
    }
  },

  User: function() {
    try {
      return axios.get("/user")
    } catch (error) {
      console.error(error)
    }
  },

  logout: function() {
    try {
      return axios.get("/logout")
    } catch (error) {
      console.error(error)
    }
  }
  
};
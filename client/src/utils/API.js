import axios from "axios";



export default {

  search: function(query) {
    return axios.get("/api/scryfall/" + query);
  },

  deleteHomepage: function() {
    return axios.get("/deleteHomepage");
  },

  edhRec: function() {
    return axios.get("/edhrecscrape");
  },

  commandZone: function() {
    return axios.get("/czscrape");
  },

  tcc: function() {
    return axios.get("/tccscrape");
  }
  
};

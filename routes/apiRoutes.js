const axios = require("axios");
const mongoose = require("mongoose")
const db = require("../models")

const BASEURL = "https://api.scryfall.com/cards/search?q=";

function apiRoutes (app) {

    app.get("/api/scryfall/:query", function (req, res) {
        let searchTerm = req.params.query
       axios.get(BASEURL + searchTerm).then(function (response) {
           console.log(response.data.items)
           res.json(response.data.items)
       }) 
    });

    

    
};

module.exports = apiRoutes;
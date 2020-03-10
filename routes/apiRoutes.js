const axios = require("axios");
const mongoose = require("mongoose")
const cheerio = require("cheerio");
const db = require("../models")

const BASEURL = "https://api.scryfall.com/cards/search?q=";

function apiRoutes (app) {

    app.get("/api/scryfall/:query", function (req, res) {
        let searchTerm = req.params.query
       axios.get(BASEURL + searchTerm).then(function (response) {
            console.log(response.data)
            res.json(response.data)
       }) 
    });

    app.get("/metagame", function (req, res) {
        axios.get("https://www.mtggoldfish.com/metagame/commander#paper").then(function (response) {

            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            let $ = cheerio.load(response.data);

            // Select each element in the HTML body from which you want information.
            // NOTE: Cheerio selectors function similarly to jQuery's selectors,
            // but be sure to visit the package's npm page to see how it works
            $(".archetype-tile").each(function (i, element) {

                let result = {};

                //result.img =  $(element).children(".article-tile-image").children(".card-title").children(".card-img-tile").attr("style");
                result.title = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").text();
                result.meta = $(element).children(".archetype-tile-statistics").children(".stats").children(".percentage").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").attr("href");
                console.log(result)
                db.Metagame.create(result)
                    .then(function (dbMetagame) {
                        // View the added result in the console
                        console.log(result)
                        console.log(dbMetagame);
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });


            });
            res.redirect("/");
        });
    });

    app.get("/budgetscrape", function (req, res) {
        axios.get("https://www.mtggoldfish.com/metagame/commander#paper").then(function (response) {

            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            let $ = cheerio.load(response.data);

            // Select each element in the HTML body from which you want information.
            // NOTE: Cheerio selectors function similarly to jQuery's selectors,
            // but be sure to visit the package's npm page to see how it works
            $(".archetype-tile").each(function (i, element) {

                let result = {};

                //result.img =  $(element).children(".article-tile-image").children(".card-title").children(".card-img-tile").attr("style");
                result.title = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").text();
                result.meta = $(element).children(".archetype-tile-statistics").children(".stats").children(".percentage").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").attr("href");

                db.BudgetMetagame.create(result)
                    .then(function (dbBudgetMetagame) {
                        // View the added result in the console
                        console.log(result)
                        console.log(dbBudgetMetagame);
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });


            });
            res.redirect("/");
        });
    });
};

module.exports = apiRoutes;
const axios = require("axios");
const mongoose = require("mongoose")
const cheerio = require("cheerio");
const db = require("../models")
const passport = require("passport")

const BASEURL = "https://api.scryfall.com/cards/search?q=";

function apiRoutes (app) {

    app.get("/api/scryfall/:query", function (req, res) {
        let searchTerm = req.params.query
       axios.get(BASEURL + searchTerm).then(function (response) {
            res.json(response.data)
       }) 
    });

    app.get("/metagameScrape", function (req, res) {
        axios.get("https://www.mtggoldfish.com/metagame/commander#paper").then(function (response) {

            let $ = cheerio.load(response.data);

            decks = [];

            $(".archetype-tile").each(function (i, element) {

                let result = {};
                
                result.img = $(element).children(".archetype-tile-image").children(".card-tile").children(".card-img-tile").attr("style");
                result.title = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").text();
                result.meta = $(element).children(".archetype-tile-statistics").children(".table").children("tbody").children().children(".percentage").text();
                result.price = $(element).children(".archetype-tile-statistics").children(".table").children("tbody").children().children(".text-right").children(".deck-price-paper").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").children().attr("href");
                console.log(result)
                //decks.push(result)
                
                // db.Metagame.create(result)
                //     .then(function (dbMetagame) {
                //         // View the added result in the console
                //         console.log(result)
                //         console.log(dbMetagame);
                //     })
                //     .catch(function (err) {
                //         // If an error occurred, log it
                //         console.log(err);
                //     });


            });
            res.send(decks);
        });
    });

    app.get("/edhrecscrape", function (req, res) {
        axios.get("https://articles.edhrec.com/").then(function (response) {

            let $ = cheerio.load(response.data);

            articles = [];

            $(".blog-post").each(function (i, element) {

                let result = {};

                result.title = $(element).children(".blog-post-title").children().text();
                result.img = $(element).children(".preview").children(".card").children(".attachment-thumbnail").attr("src")
                result.description = $(element).children(".preview").children(".post").children().children().text();
                result.link = $(element).children(".blog-post-title").children().attr("href");
                articles.push(result)
            });
            res.send(articles);
        });
    });

    app.get("/czscrape", function (req, res) {
        axios.get("https://commandzone.collected.company/").then(function (response) {

            let $ = cheerio.load(response.data);

            articles = [];

            $(".episode").each(function (i, element) {

                let result = {};

                result.title = $(element).children(".col-9").children("h1").children().text();
                result.img = $(element).children(".col-3").children(".episode-image").attr("src")
                result.description = $(element).children(".col-9").text();
                result.link = "https://commandzone.collected.company" + $(element).children(".col-9").children("h1").children().attr("href");
                articles.push(result)
            });
            res.send(articles);
        });
    });

    app.get("/tccscrape", function (req, res) {
        axios.get("https://www.tolariancommunitycollege.com/category/youtube/commander-edh/").then(function (response) {

            let $ = cheerio.load(response.data);

            articles = [];

            $(".blog-item-wrap").each(function (i, element) {

                let result = {};
                result.title = $(element).children(".post-inner-content").children(".entry-header").children(".entry-title").children("a").text();
                result.img = $(element).children(".videoWrapper").children().attr("src")
                result.description = $(element).children(".post-inner-content").children(".entry-content").children("p").text();
                result.link = $(element).children(".post-inner-content").children(".entry-header").children(".entry-title").children("a").attr("href");
                articles.push(result)
            });
            res.send(articles);
        });
    });

    app.post('/register', function(req, res){
       console.log(req.body)
        var newUser = new db.User({
        // name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
        });
    
        db.User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
        });
    
    });

    // Endpoint to login
    app.post('/login',
        passport.authenticate('local'),
        function(req, res) {

            console.log(req.body)
            res.send(req.user);
        }
    );

    // Endpoint to get current user
    app.get('/user', function(req, res){
        // console.log("user route")
        // console.log(req.user)
        // console.log("user route")
        res.send(req.user);
    })


    // Endpoint to logout
    app.get('/logout', function(req, res){
        console.log(req)
        req.logout();
        console.log(req)
        res.send(null)
    });

    
}

module.exports = apiRoutes;
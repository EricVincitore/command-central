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

    app.get("/metagamescrape", function (req, res) {
        axios.get("https://www.mtggoldfish.com/metagame/commander#paper").then(function (response) {

            let $ = cheerio.load(response.data);

            decks = [];

            $(".archetype-tile").each(function (i, element) {

                let result = {};
                
                result.img = $(element).children(".archetype-tile-image").children(".card-tile").children(".card-image-tile").attr("style").replace("background-image: url('", "").replace("');", "")
                result.title = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".archetype-tile-title").children(".deck-price-paper").children().text()
                result.meta = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-statistics").children(".archetype-tile-statistics-left").children(".archetype-tile-statistic").children(".archetype-tile-statistic-value").text();
                result.list = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children("ul").text();
                result.price = $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-statistics").children(".archetype-tile-statistics-right").children(".deck-price-paper").children(".archetype-tile-statistic-value").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".archetype-tile-title").children(".deck-price-paper").children().attr("href")
                decks.push(result)

            });
            res.send(decks);
            console.log(decks)
        });
    });

    app.get("/edhrecscrape", function (req, res) {
        axios.get("https://articles.edhrec.com/").then(function (response) {

            let $ = cheerio.load(response.data);

            articles = [];

            $(".blog-post").each(function (i, element) {

                let result = {};

                result.title = $(element).children(".blog-post-title").children().text();
                result.img = $(element).children(".preview").children(".card").children(".attachment-thumbnail").attr("data-src")
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

    app.get("/ccscrape", function (req, res) {
        axios.get("https://www.mtggoldfish.com/series/commander-clash").then(function (response) {

            let $ = cheerio.load(response.data);

            articles = [];

            $(".article-tile").each(function (i, element) {

                let result = {};
                result.title = $(element).children(".article-tile-contents").children(".article-tile-title").children(".stealth-link").text();
                result.img = $(element).children(".article-tile-image").children(".card-tile").children(".card-image-tile").attr("style").replace("background-image: url('", "").replace("thumbnail_","").replace("');", "")
                result.description = $(element).children(".article-tile-contents").children(".article-tile-abstract").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".article-tile-contents").children(".article-tile-title").children(".stealth-link").attr("href");
                articles.push(result)
            });
            res.send(articles);
        });
    });


    app.get("/api/cards", function (req, res) {
        db.Cards.find()
        .then(function (response) {
            res.json(response)
        })
    });

    app.post("/api/saveCard", function (req, res) {
        var newCard = new db.Cards ({
            name: req.body.name
        });

        db.Cards.create(newCard, function (err, card) {
            if (err) throw err
            res.send(card)
        });
    });

    app.delete("/api/cards/:id", function (req, res) {
        var id = mongoose.Types.ObjectId(req.params.id);
        db.Cards.deleteOne({ _id: id }, function (err) {
            if (err) return handleError(err);
            // deleted at most one tank document
            console.log("Deleted")
        });
    });

    app.get("/deleteAll", function (req, res) {
        db.Cards.deleteMany({}).then(function (data) {
            console.log("Cards Deleted")
        }).catch(function (err) {
            console.log(err)
        });
        res.redirect("/database");
    });

    app.post('/register', function(req, res){
        var newUser = new db.User({
            name: req.body.name,
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
        // {
        //     successRedirect: "/",
        //     failureRedirect: "/signin"
        // }
        function(req, res) {
            console.log(" in login route")
            console.log(req.user)
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
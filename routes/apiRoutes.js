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

    app.get("/scrape", function (req, res) {
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
                result.meta = $(element).children(".archetype-tile-statistics").children(".table").children(".percentage").text();
                result.link = "https://www.mtggoldfish.com" + $(element).children(".archetype-tile-description-wrapper").children(".archetype-tile-description").children(".title").children(".deck-price-paper").children().attr("href");
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

    app.get("/edhrecscrape", function (req, res) {
        axios.get("https://articles.edhrec.com/").then(function (response) {

            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            let $ = cheerio.load(response.data);

            articles = [];

            $(".blog-post").each(function (i, element) {

                let result = {};

                //result.img =  $(element).children(".article-tile-image").children(".card-title").children(".card-img-tile").attr("style");
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

            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            let $ = cheerio.load(response.data);

            // Select each element in the HTML body from which you want information.
            // NOTE: Cheerio selectors function similarly to jQuery's selectors,
            // but be sure to visit the package's npm page to see how it works
            $(".episode").each(function (i, element) {

                let result = {};

                //result.img =  $(element).children(".article-tile-image").children(".card-title").children(".card-img-tile").attr("style");
                result.title = $(element).children(".col-9").children("h1").children().text();
                result.img = $(element).children(".col-3").children(".episode-image").attr("src")
                result.description = $(element).children(".col-9").text();
                result.link = "https://commandzone.collected.company" + $(element).children(".col-9").children("h1").children().attr("href");
            });
            res.redirect("/");
        });
    });

    app.get("/tccscrape", function (req, res) {
        axios.get("https://www.tolariancommunitycollege.com/category/youtube/commander-edh/").then(function (response) {

            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            let $ = cheerio.load(response.data);

            // Select each element in the HTML body from which you want information.
            // NOTE: Cheerio selectors function similarly to jQuery's selectors,
            // but be sure to visit the package's npm page to see how it works
            $(".blog-item-wrap").each(function (i, element) {

                let result = {};

                //result.img =  $(element).children(".article-tile-image").children(".card-title").children(".card-img-tile").attr("style");
                result.title = $(element).children(".post-inner-content").children(".entry-header").children(".entry-title").children("a").text();
                result.img = $(element).children(".videoWrapper").children().attr("src")
                result.description = $(element).children(".post-inner-content").children(".entry-content").children("p").text();
                result.link = $(element).children(".post-inner-content").children(".entry-header").children(".entry-title").children("a").attr("href");
            });
            res.redirect("/");
        });
    });

    app.get("/deleteHomepage", function (req, res) {
        db.EdhRec.deleteMany({}).then(function (data) {
            console.log("EdhRec Deleted")

        }).catch(function (err) {
            console.log(err)
        });

        db.CommandZone.deleteMany({}).then(function (data) {
            console.log("Command Zone Deleted")

        }).catch(function (err) {
            console.log(err)
        });

        db.Tcc.deleteMany({}).then(function (data) {
            console.log("TCC Deleted")

        }).catch(function (err) {
            console.log(err)
        });
        
        res.redirect("/");
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
        function(req, res) {
            //console.log(req.user)
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
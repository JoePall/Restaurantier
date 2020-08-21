// Dependencies
// =============================================================
var express = require("express");
var http = require("http");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require("fs");


const data = {
    "Home": {
        title: `Home`,
        main: `<h1 class="has-text-centered pt-6">Welcome <b>Home</b></h1>`
    },
    "About": {
        title: `About Me`,
        main: `<p>I like</p><ul><li>Chile Relleno</li><li>Baja Fish Tacos</li><li>Fajitas</li></ul>`
    },
    "FavoriteMovies": {
        title: `Favorite Movies`,
        main: `<ul><li>Captain America</li><li>Chuck (TV Series)</li><li>Monk (TV Series)</li></ul>`
    },
    "FavoriteCSSFrameworks": {
        title: `Favorite CSS Frameworks`,
        main: `<ul><li>Bulma</li><li>Bootstrap</li></ul>`
    },
};
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    require('child_process').exec(`start http://localhost:${PORT}/`);
});

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = {
    "Home": {
        title: `Home`,
        main: `<h1 class="has-text-centered pt-6">Welcome <b>Home</b></h1>`
    },
    "About": {
        title: `About Me`,
        main: `<p>I like</p><ul><li>Chile Relleno</li><li>Baja Fish Tacos</li><li>Fajitas</li></ul>`
    }
};

app.get("/", function (req, res) {
    generatePage(data["Home"], result => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(result);
    });
});

app.get("/:route", function (req, res) {
    let { route } = req.params;
    if (route in data) {
        generatePage(data[route], result => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(result);
        });
    }
});

app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});


function generatePage({ title, main }, done) {
    fs.readFile(__dirname + "/template.html", "utf8", (err, templateData) => {
        if (err)
            throw err;

        let nav = "";
        for (const item in data) {
            nav += `<div class="button is-3 is-large is-rounded mx-3 is-outlined"><a href="/${item}">${item.replace("-", " ")}</a></div>`;
        }
        console.log(templateData);
        done(templateData.toString()
            .replace(new RegExp("{{ title }}", "gm"), title)
            .replace(new RegExp("{{ nav }}", "gm"), nav)
            .replace(new RegExp("{{ main }}", "gm"), main));
        console.log(templateData);

    });
}

app.listen(PORT, function () {
    console.log(`start http://localhost:${PORT}/`);
});

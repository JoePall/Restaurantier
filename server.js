const express = require("express");
const path = require("path");
const fs = require("fs");
const data = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    else {
        try {
            generatePage(data["Error"], result => {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(result);
            });
            
        } catch (error) {
            res.end("Issue... 404ish");
        }
    }
});

function generatePage({ title, main }, done) {
    fs.readFile(__dirname + "/template.html", "utf8", (err, templateData) => {
        if (err)
            throw err;

        done(templateData.toString()
            .replace(new RegExp("{{ title }}", "gm"), title)
            .replace(new RegExp("{{ main }}", "gm"), main));

    });
}

app.listen(PORT, function () {
    if (process.env.PORT) return;
    require('child_process').exec(`start http://localhost:${PORT}/`);
});

const express = require("express");
const path = require("path");
const fs = require("fs");
const templateData = require("./templateData");

const app = express();
const PORT = process.env.PORT || 3000;

const data = [
    {
        "ID": 89494,
        "Name": "",
        "Phone": "",
        "Email": "",
        "Party": 0,
    }
]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    generatePage(templateData["Home"], result => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(result);
    });
});

app.get("/:route", function (req, res) {
    let { route } = req.params;
    console.log(route);
    if (route.startsWith("api")) {
        console.log("starts...");
        return handleApi(req, res);
    }
    console.log(route);
    if (route in templateData) {
        generatePage(templateData[route], result => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(result);
        });
    }
    else {
        try {
            generatePage(templateData["Error"], result => {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(result);
            });
            
        } catch (error) {
            res.end("Issue... 404ish");
        }
    }
});

app.get("/api/:value", function (req, res) {
    let { value } = req.params;
    if (value === "data") return res.json(data);
});

function generatePage({ title, main }, done) {
    fs.readFile(__dirname + "/template.html", "utf8", (err, fileData) => {
        if (err)
            throw err;

        done(fileData.toString()
            .replace(new RegExp("{{ title }}", "gm"), title)
            .replace(new RegExp("{{ main }}", "gm"), main));

    });
}

app.listen(PORT, function () {
    if (process.env.PORT) return;
    require('child_process').exec(`start http://localhost:${PORT}/`);
});
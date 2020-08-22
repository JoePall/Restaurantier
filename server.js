const express = require("express");
const path = require("path");
const fs = require("fs");
const templateData = require("./templateData");

const app = express();
const PORT = process.env.PORT || 3000;

const data = [
    {
        ID: 89494,
        Name: "Josiah Powell",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Josiah Powell",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Josiah Powell",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 8974,
        Name: "Charlene Peters",
        Phone: "123-456-7890",
        Email: "",
        Party: 4,
    },
    {
        ID: 894,
        Name: "John Glendening",
        Phone: "123-456-7890",
        Email: "",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Jourdan Case",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Jourdan Case",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Jourdan Case",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
    },
    {
        ID: 894,
        Name: "Jourdan Case",
        Phone: "123-456-7890",
        Email: "josiahpowell@outlook.com",
        Party: 3,
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

app.get("/Tables", function (req, res) {
    fs.readFile(__dirname + "/tables.html", "utf8", (err, fileData) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        console.log(data);
        console.log(data.slice(0, 5));
        console.log(data.slice(5));
        res.end(fileData.toString()
            .replace(new RegExp("{{ atTable }}", "gm"), data.slice(0, 5).map(getTableReservation))
            .replace(new RegExp("{{ waiting }}", "gm"), data.slice(5).map(getTableReservation)));
    });
});

app.get("/:route", function (req, res) {
    let { route } = req.params;
    if (route === "") route = "Home";
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

app.post("/Reserve", function (req, res) {
    data.push(req.body);
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

function getTableReservation(reservationInfo) {
    let { ID, Name, Phone, Email, Party } = reservationInfo;
    let result = `
    <div class="card p-2">
                <p>${ID}</p>
                <p>${Name}</p>
                <p>${Phone}</p>
                <p>${Email}</p>
                <p>${Party}</p>
            </div>
            `;

    console.log(result);
    return result;
}

app.listen(PORT, function () {
    if (process.env.PORT) return;
    require('child_process').exec(`start http://localhost:${PORT}/`);
});
const https = require("https");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

require("dotenv").config({
    path: path.join(__dirname, "config.env"),
});

const express = require("express");

const app = express();

const server = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, "certs/key.pem")),
        cert: fs.readFileSync(path.join(__dirname, "certs/cert.pem")),
        secureContext: true,
    },
    app
);

app.enable("Trust proxy");
app.use(helmet());

app.use(
    compression({
        level: 9,
        memLevel: 9,
    })
);

// To Serve Static files like styles and JS
app.use(express.static(path.join(__dirname, "static")));

// To set template engine to PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.status(200).render("index", {
        title: "My Port Folio | Welcome",
    });
});

app.get("*", (req, res) => {
    res.status(400).render("error", {
        title: "Error | Page Not Found",
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

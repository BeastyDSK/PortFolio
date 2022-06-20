const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "config.env"),
});

const express = require("express");

const app = express();

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
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

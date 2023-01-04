const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const json = require("body-parser/lib/types/json");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/personalsite.html");
});

app.get("/cv", function (req, res) {
    res.sendFile(__dirname + "/public/cv.html");
});

app.get("/books", function (req, res) {
    res.sendFile(__dirname + "/public/books.html");
});




app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000");
});
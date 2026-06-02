require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected!");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
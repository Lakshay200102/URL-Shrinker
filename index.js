const express = require("express");
const mongoose = require("mongoose");
const url = require("./models/url");
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(clientRoutes);


app.listen(5000);

require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const indexRoute = require("./routes/index");

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views engine', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect(process.env.DATABASE_URL);



app.use("/", indexRoute);

app.listen(port, function(){
    console.log(`Server is listening at https://localhost:${port}`);
});
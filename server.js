require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

app.set('view engine', 'ejs');
app.set('views engine', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Server is listening at https://localhost:${port}`);
});
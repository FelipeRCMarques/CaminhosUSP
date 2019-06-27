var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require('mysql');

app.use( express.static( "public" ) );
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


var connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"caminhUSP"
});


//some more code to get different routes

connection.connect(function(error){
    if(error){
        console.log("Error while connecting to database")
    }
    else{

         console.log("connected");

    // console.log(result);
}});


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.post("/test", function(req, res) {
    // get data from forms and add to the table called user..

    var descricao = req.body.Descricao;

    console.log(descricao);

    connection.query("INSERT INTO input (desc, latitude, longitude) VALUES (", descricao ,",", 0.91819,",", 23.3434,")", function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
    res.redirect("/")}) ;
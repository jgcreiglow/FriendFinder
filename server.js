var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/apiroutes')(app);
require('./app/routing/htmlroutes')(app);

var PORT = process.env.PORT || 8080;


app.listen(PORT, () =>{
    console.log("server listening on Port " + PORT);
});
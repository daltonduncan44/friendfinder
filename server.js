// set up json
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;


var app = express();
//console log 8080 if local hosting is set up 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('app'));
//======set up routing 
//require('./app/routing/apiRoutes.js')(app);
//require('./app/routing/htmlRoutes.js')(app);


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
// set up json
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('app'));
//set up routing 
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


app.listen(process.env.PORT || 3000);
var express = require("express");
var cors = require('cors');
var http = require('http');
var request = require('request');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');
var bodyParser = require('body-parser');
var querystring = require('querystring');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};

app.configure(function(){
	app.use(allowCrossDomain);
});

app.get('/sample', function(req, res){
    var sampleObj = require('./sampleObject.json');
    res.end(JSON.stringify(sampleObj));
});

//module.exports = app;

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
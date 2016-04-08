// server.js
var express  = require('express');
var mongodb  = require('mongodb');
var app      = express();
var MongoClient = require('mongodb').MongoClient;
var db;
var port     = process.env.PORT || 8080;

// configuration ===============================================================
MongoClient.connect(mongodb://appharbor_d5m64klw:tmfepasg6qqn9nfn8iujshsl47@ds019960.mlab.com:19960/appharbor_d5m64klw ,function(err, database)
{
if(err) throw err;
db = database;
app.listen(port, function ()
{
console.log('Example app listening on port' + port);
});
});
app.get('/', function (req, res) {
res.json({ message: 'welcome api!' });
});



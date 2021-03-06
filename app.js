var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var mongo = require('mongodb');
var mongoUri = process.env.MONGO_URI || 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/myfirstnode'; 

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
      collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
      });
  });
});

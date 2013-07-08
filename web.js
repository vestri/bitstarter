var express = require('express');
var fs = require('fs');

var buf = new Buffer(100);
buf.copy(fs.readFileSync("index.html"));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log("recieved a request from " + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'}); //specifiy the type of response and declare type of data you are serving
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  readStream.pipe(res);
});

server.listen(3002);

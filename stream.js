var http = require('http');
var fs = require('fs');


//use streams to split up data into chunks so as to improve performance of your app
var readStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
var writeStream = fs.createWriteStream(__dirname + "/writeMe.txt");

/*
readStream.on('data', function(chunk){
  console.log("new chunk recieved");
  //console.log(chunk);
  writeStream.write(chunk);
})
*/


//use pipes to quickly write from a read stream to a write stream without using a listener
readStream.pipe(writeStream);

http = require('http'); //get the http module
module = require('./module'); //get our own specific module in the same directory
myEvents = require('./myEvents');
fs = require('fs');

var server = http.createServer(function(request,response){ //create a basic server with basic routing
  console.log("Recieved a request from " + request.url);
  if(request.url === '/index' || request.url === '/'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html', 'utf8').pipe(response);
  }
  else if(request.url === '/api'){
    response.writeHead(200, {'Content-Type': 'application/json'}); //specify the type of response in the headers
    var myObject = [{
      name: 'Manuja',
      job: 'programmer',
      age: 19,
    },{
      name: 'Ryu',
      job: 'ninja',
      age: 29
    }];
    response.end(JSON.stringify(myObject)); //accepts string or buffer
  }
  else if(request.url === '/dev'){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Page still being built");
  }
  else {
    response.writeHead(404, {'Content-Type': 'text/plain'})
    response.end("Oops, nothing exists here yet!");
  };


});

server.listen(3002); //listen on port 3002


console.log(__dirname);
console.log(__filename);
/*

setTimeout(function(){
  console.log("2 seconds have passed");
}, 2000);


var time = 0;


//function expression, when a function is set equal to a variable
var timer = function(){
  time += 3;
  console.log(time + " seconds have passed");
};

var myTimer = setInterval(timer, 3000);


myArray = ['manuja', 'dilhara', 'sawandi'];



//call methods that you defined and exported in another module
console.log(module.numElements(myArray));
console.log(module.multiplier(5,5));
console.log(module.multiplier(5,module.pi));

myEvents.myEmitter.emit('someEvent', 'Event activated'); //access the myEmitter object in myEvents module and pass in the emit function
*/

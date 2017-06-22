var fs = require('fs');

//var readMe = fs.readFileSync('readMe.txt', 'utf8');
//synchronous method --> will read file and run method before it goes onto the rest of the code


fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile('writeMe.txt',data);
});  //asynchronous ---> code below this method will run while this function runs.


fs.unlink('writeMe.txt'); //delete file

fs.rmdirSync('stuff'); //remove dir
fs.mkdirSync('stuff'); //create directory



fs.mkdir('stuff', function(){ //async functions need a callback function
  fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});

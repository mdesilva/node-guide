var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, docs){
  console.log(docs);
});

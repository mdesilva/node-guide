var express = require('express');
var bodyParser = require('body-parser');

var app = express(); //fire up the express function
app.set('view engine', 'ejs'); //set a templating engine
app.use('/assets', express.static('assets')); //serve up static files app.use(static directory, express.static('directory'));

app.listen(3000); //listen to specific port

//create form parser
var urlEncodedParser = bodyParser.urlencoded( {extended: false});

//app.get('route', function(req, res){});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/dev', function(req,res){
  res.send("This is the developers page");
});

//custom routes, ---> /page/:someID
app.get('/profile/:id', function(req,res){
  res.send("You requested to see " + req.params.id + "'s profile");
  //to access the request parameters, use request.params.paramName
})

app.get('/user/:name', function(req,res){
  var data = {hometown: "Staten Island", subject: "Programming", hobbies: ['hiking', 'running', 'cycling']};
  res.render('name', {name: req.params.name, hometown: data.hometown, subject: data.subject, hobbies: data.hobbies}) //respond with a page built on top of templating engine
})

app.get('/contact', function(req,res){
  //req.query to access the query string that is in the url ex. contact?dept=marketing&person=daniel
  res.render('contact', {query: req.query});
})


//handling a post request
app.post('/contact',urlEncodedParser, function(req, res){
  //urlEncodedParser will parse data that is submitted with form
  console.log(req.body); //access data with req.body
  res.render('success', {query: req.body});
});

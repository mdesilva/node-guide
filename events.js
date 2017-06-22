var events = require('events');
var util = require('util');
var myEmitter = new events.EventEmitter(); //chain event listener to an object

myEmitter.on('someEvent', function(msg){ //on an event, do some function
  console.log(msg);
});

module.exports.myEmitter = myEmitter; //export myEmitter to all other modules


var Person = function(name){
  this.name = name;
};


util.inherits(Person, events.EventEmitter); //Person constructor inherits the EventEmitter ability

var jane = new Person('jane');
var barron = new Person('barron');
var ryu = new Person('ryu');

var people = [jane, barron, ryu]; //put the person objects into an array




//forEach is a js function that iterates through an array of elements
// array.forEach(function(element){
// some function
//});

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + " says " + msg);
});
});

people.forEach(function(person){
  person.on('think', function(msg){
    console.log(person.name + " is thinking about " + msg);
  });
});


jane.emit('speak', 'Im hungry');
barron.emit('speak', 'I want to read');
ryu.emit('think', 'sustainability');

var events = require('events');

var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var mary = new Person("mary");
var john = new Person("john");
var people = [james, mary, john];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'Hey Man');
john.emit('speak', 'Im pretty good');
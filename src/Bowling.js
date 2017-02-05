'use strict';

var Bowling = function() {
  this.rolls =[]
};

Bowling.prototype.roll = function(pins){
    this.rolls.push(pins)
};

Bowling.prototype.score = function(){
    var result = 0
    for (var i = 0; i < 20; i++) {
      result += this.rolls(i)
    }
    return results;
};

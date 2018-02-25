'use strict'

var Bowling = function (){
  this.rolls = [];
  this.current = 0;
  this.points = 0;
};

Bowling.prototype = {
  roll: function(pins){
    this.rolls[this.current++] = pins;
  },

  score: function(){
    for (var i = 0; i < this.rolls.length; i ++){
      if (this.isSpare(i)){
        this.points += 10 + this.rolls[i+2];
        i++;
      } else {
        this.points += this.rolls[i];
      }
    }
    return this.points;
  },

  isSpare: function(roll) {
   return this.rolls[roll] + this.rolls[roll+1] === 10;
  },

  isStrike: function(roll){
    return this.rolls[roll] === 10;
  },

}

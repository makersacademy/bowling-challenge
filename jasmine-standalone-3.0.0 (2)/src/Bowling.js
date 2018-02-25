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
      this.points += this.rolls[i];
     }
    return this.points;
  },

  isSpare: function(roll){
   return this.roll(roll) + this.roll(roll + 1) === 10;


  },


}

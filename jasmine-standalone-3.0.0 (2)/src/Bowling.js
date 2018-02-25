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
    var hasBonusRoll = this.hasBonus;
    var scoring = (hasBonusRoll) ? hasBonusRoll +1 : this.rolls.length;

    for (var i = 0; i < scoring; i ++){
      if (this.isStrike(i)){
        this.points += 10 + this.rolls[i+1] + this.rolls[i+2];
        } else if (this.isSpare(i)){
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

  hasBonus: function(){
    var tenFrame = this.rolls.length -3;
    var bonus = (this.isStrike(tenFrame)) || (this.isSpare(tenFrame));

    return (bonus)? tenFrame : null;

  },

}

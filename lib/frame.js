'use script';

function Frame(){
  this.rolls = [0, 0];
  this.isSpare = false;
  this.isStrike = false;
  this.isComplete = false;
}

Frame.prototype.firstRoll = function(roll){
  this.rolls[0] = roll;
  if (roll === 10) this.isStrike = true, this.isComplete = true;
};

Frame.prototype.secondRoll = function(roll){
  this.rolls[1] = roll;
  if (this.score() === 10)  this.isSpare = true;
  this.isComplete = true;
};

Frame.prototype.score = function(){
  return this.rolls.reduce(function (total, roll){
    return total + roll;
  });
};

module.exports = Frame;


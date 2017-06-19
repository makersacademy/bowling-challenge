'use script';

function Frame(){
  this.MAXSCORE = 10;
  this.MAXROLLS = 2;
  this.rolls = [];
}

Frame.prototype.addRoll = function(roll){
  if (!(this.isComplete())) this.rolls.push(roll);
};

Frame.prototype.score = function(){
  return this.rolls.reduce(function (total, roll){
    return total + roll;
  });
};

Frame.prototype.isStrike = function(){
  return this.rolls[0] === this.MAXSCORE;
};

Frame.prototype.isSpare = function(){
  return this.score() === this.MAXSCORE;
};

Frame.prototype.isComplete = function(){
  return this.rolls.length >= this.MAXROLLS || this.isStrike();
};

module.exports = Frame;


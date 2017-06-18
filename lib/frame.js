'use script';

function Frame(){
  this.MAXSCORE = 10;
  this.MAXROLLS = 2;
  this.rolls = [];
  this.isSpare = false;
  this.isStrike = false;
  this.isComplete = false;
}

Frame.prototype.addRoll = function(roll){
  if (!(this.isComplete)) this.rolls.push(roll);
  if (roll === this.MAXSCORE) this.isStrike = true, this.isComplete = true;
  if (this.rolls.length === this.MAXROLLS && this.score() === this.MAXSCORE) this.isSpare = true;
  if (this.rolls.length === this.MAXROLLS) this.isComplete = true;
};

Frame.prototype.score = function(){
  return this.rolls.reduce(function (total, roll){
    return total + roll;
  });
};

module.exports = Frame;


var Game = function () {
  this.score = 0;
  this.rolls =[];
  this.currentRoll = 0;
};

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.displayScore = function () {
  for( var i=0; i < this.rolls.length; i++) {
    this.score += this.rolls[i];
  }
  return this.score;
};

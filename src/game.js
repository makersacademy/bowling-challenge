var Game = function () {
  this.score = 0;
  this.rolls =[];
  this.currentRoll = 0;
};

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.displayScore = function () {
  var i = 0;
  for( var frame=0; frame < 10; frame++) {
    if(this.rolls[i] + this.rolls[i+1] === 10) {
      this.score = 10 + this.rolls[i+2];
    }
    else {
      this.score += this.rolls[i] + this.rolls[i+1];
    }
    i += 2;

  }
  return this.score;
};

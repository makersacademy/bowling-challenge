var Game = function () {
  this.score = 0;
  this.rolls =[];
  this.currentRoll = 0;
};

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.displayScore = function () {
  var frameIndex = 0;
  for( var frame=0; frame < 10; frame++) {
    if(this._isSpare(frameIndex)) {
      this.score = 10 + this.rolls[frameIndex+2];
      frameIndex += 2;
    }
    else {
      this.score += this.rolls[frameIndex] + this.rolls[frameIndex+1];
      frameIndex += 2;
    }
    
  }
  return this.score;
};

Game.prototype._isSpare = function (index) {
  return this.rolls[index] + this.rolls[index+1] === 10;
};

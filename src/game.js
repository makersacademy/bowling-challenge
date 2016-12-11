var Game = function () {
  this.score = 0;
  this.rolls =[];
  this.currentRoll = 0;
  this.MAX_POINTS = 10;
};

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.displayScore = function () {
  var frameIndex = 0;
  for( var frame=0; frame < 10; frame++) {
    if(this._isStrike(frameIndex)) {
      this.score = this._strikeBonus(frameIndex);
      frameIndex++;
    }
    else {
      if(this._isSpare(frameIndex)) {
        this.score = this._spareBonus(frameIndex);
        frameIndex += 2;
      }
      else {
        this.score += this._frameScore(frameIndex);
        frameIndex += 2;
      }
    }
  }
  return this.score;
};

Game.prototype._isSpare = function (index) {
  return this.rolls[index] + this.rolls[index+1] === this.MAX_POINTS;
};

Game.prototype._isStrike = function (index) {
  return this.rolls[index] === this.MAX_POINTS;
};

Game.prototype._spareBonus = function (index) {
  return this.MAX_POINTS + this.rolls[index+2];
};

Game.prototype._strikeBonus = function (index) {
  return this.MAX_POINTS + this.rolls[index+1] + this.rolls[index+2];
};

Game.prototype._frameScore = function (index) {
  return this.rolls[index] + this.rolls[index+1];
};

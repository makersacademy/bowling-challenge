var Game = function () {
  this.rolls =[];
  this.currentRoll = 0;
  this.MAX_POINTS = 10;
};

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};


Game.prototype.score = function () {
  var score = 0;
  var frameIndex = 0;
  for( var frame=0; frame < 10; frame++) {
    if(this._isStrike(frameIndex)) {
      score += 10 + this._strikeBonus(frameIndex);
      frameIndex++;
    }
    else {
      if(this._isSpare(frameIndex)) {
        score += 10 + this._spareBonus(frameIndex);
        frameIndex += 2;
      }
      else {
        score += this._frameScore(frameIndex);
        frameIndex += 2;
      }
    }
  }
  return score;
};

Game.prototype._isSpare = function (index) {
  return this.rolls[index] + this.rolls[index+1] === this.MAX_POINTS;
};

Game.prototype._isStrike = function (index) {
  return this.rolls[index] === this.MAX_POINTS;
};

Game.prototype._spareBonus = function (index) {
  return this.rolls[index+2];
};

Game.prototype._strikeBonus = function (index) {
  return this.rolls[index+1] + this.rolls[index+2];
};

Game.prototype._frameScore = function (index) {
  return this.rolls[index] + this.rolls[index+1];
};

game = new Game();

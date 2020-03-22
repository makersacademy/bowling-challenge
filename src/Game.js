

function Game(){
  this.rolls = [];
  this.currentBall = 0;
}

Game.prototype.currentScore = function (){
  var score = 0;
  var frameIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this._isStrike(frameIndex)) {
      score += 10 + this._strikeBonus(frameIndex);
      frameIndex++;
    } else if (this._isSpare(frameIndex)) { 
      score += 10 + this._spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      score += this._sumOfBalls(frameIndex);
      frameIndex += 2;
    }
  }
  return score;
};

Game.prototype.roll = function(pins){
  this.rolls[this.currentBall++] = pins;
};

Game.prototype._sumOfBalls = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex+1];
};

Game.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10;
};

Game.prototype._spareBonus = function(frameIndex) {
  return this.rolls[frameIndex+2];
};

Game.prototype._isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
};

Game.prototype._strikeBonus = function(frameIndex){
  return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
};

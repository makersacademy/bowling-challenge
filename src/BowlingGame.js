function BowlingGame() {
  this._frameScore = new Array(10).fill(0);
  this._rolls = new Array(2).fill().map(() => Array(10).fill(0));
}

BowlingGame.prototype.getFrameScore = function(round){
  return this._frameScore[round];
}

BowlingGame.prototype.getRolls = function(roll,round){
  return this._rolls[roll][round];
}


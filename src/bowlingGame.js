function BowlingGame() {
  this._frameNumber = 1
  this._rollNumber = 1
}

BowlingGame.prototype.nextRound = function() {
  if(this._frameNumber >= 11) throw Error("Game Over!")
  this._frameNumber += 1;
}

BowlingGame.prototype.firstRoll = function(score) {
  this._frameNumber
  this._rollNumber += 1
}

BowlingGame.prototype.secondRoll = function(score) {
  this.nextRound();
}

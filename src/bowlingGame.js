function BowlingGame() {
  this._frameNumber = 1
  this._rollNumber = 1
}

BowlingGame.prototype.nextRound = function() {
  if(this._frameNumber >= 11) throw Error("Game Over!")
  this._frameNumber += 1;
};

BowlingGame.prototype.firstRoll = function(score) {
  if (score === 10 && this._frameNumber === 10) {
    this._rollNumber +=1
  } else if (score === 10) {
    this._frameNumber += 1
  }
  this._frameNumber
  this._rollNumber += 1
};

BowlingGame.prototype.secondRoll = function(score) {
  this._rollNumber = 2
  if (score === 10 && this._frameNumber === 10) {
    this._rollNumber += 1
    this._frameNumber -=1
  } else if (score !== 10 && this._frameNumber === 10) {
    this.isOver();
  }
  this.nextRound();
};

BowlingGame.prototype.thirdRoll = function(score) {
  this.isOver();
};

BowlingGame.prototype.isOver = function(score) {
    return true
};

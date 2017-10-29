function BowlingGame() {
  this._frameNumber = 1
  this._frameScore = 0
  this._totalScore = 0
  this._rollNumber = 1
}

BowlingGame.prototype.nextRound = function() {
  if(this._frameNumber >= 11) throw Error("Game Over!")
  this._frameNumber += 1;
};

BowlingGame.prototype.nextRoll = function() {
  if(this._rollNumber >= 3) throw Error("Max rolls reached")
  this._rollNumber += 1;
}

BowlingGame.prototype.firstRoll = function(score) {
  if (score === 10 && this._frameNumber === 10) {
    this._frameNumber
  } else if (score === 10) {
    this._frameNumber += 1
  }
  this._frameScore += score
  this.nextRoll()
};

BowlingGame.prototype.secondRoll = function(score) {
  if (score === 10 && this._frameNumber === 10) {
    this._frameNumber -=1
    this.nextRoll()
  } else if (score !== 10 && this._frameNumber === 10) {
    this.isOver();
  }
  this._frameScore += score
  this.nextRound();
};

BowlingGame.prototype.thirdRoll = function(score) {
  this.isOver();
};

BowlingGame.prototype.isOver = function(score) {
    return true
};

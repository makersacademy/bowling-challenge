function FrameScore() {
  this.strikes = 0
  this.spares = 0
  this._currentScore = 0
};

FrameScore.prototype.score = function(_frameScore) {
  if (_frameScore == "Spare") {
    this.spares ++ ;
    return " " ;
  }
  else if (_frameScore == "Strike") {
    this.strikes ++ ;
    return " " ;
  }
}

FrameScore.prototype.continue = function (a,b) {
  if (this.strikes > 0) {
    this._currentScore = (this.strikes * 10 + a + b) + (a + b)
    this.strikes = 0
  }
  else if (this.spares > 0) {
    this._currentScore = (this.spares * 10 + a) + (a + b)
    this.spares = 0
  } else {
    this._currentScore += (a + b)
  }
}

function RunningScore() {
  this.DEFAULT_VALUE = 0
  this.STARTING_SCORE = 0
  this.strikes = this.DEFAULT_VALUE
  this.spares = this.DEFAULT_VALUE
  this.score = this.STARTING_SCORE
  this.allBowls = []
};

RunningScore.prototype.spareOrStrike = function(frameInformation, a, b) {
  this._updateAllBowls(a,b);
  if (frameInformation == "Spare") {
    this.spares ++ ;
  }
  else if (frameInformation == "Strike") {
    this.strikes ++ ;
  }
}

RunningScore.prototype.updateRuningScore = function (a,b) {
  this._updateAllBowls(a,b);
  if (this.strikes > this.DEFAULT_VALUE) {
    this.score += ((this.strikes * 10 + a + b) + (a + b))
    this.strikes = this.DEFAULT_VALUE
    return this.score
  }
  else if (this.spares > this.DEFAULT_VALUE) {
    this.score += ((this.spares * 10 + a) + (a + b))
    this.spares = this.DEFAULT_VALUE
    return this.score
  } else {
    this.score += (a + b)
    return this.score
  }
}

RunningScore.prototype._updateAllBowls = function (a,b) {
  if (a !== 0) this.allBowls.push(a);
  if (b !== 0) this.allBowls.push(b);
}

function RunningScore() {
  this.DEFAULT_VALUE = 0
  this.STARTING_SCORE = 0
  this.strikes = this.DEFAULT_VALUE
  this.spares = this.DEFAULT_VALUE
  this.score = this.STARTING_SCORE
};

RunningScore.prototype.spareOrStrike = function(frameInformation) {
  if (frameInformation == "Spare") {
    this.spares ++ ;
    return " " ;
  }
  else if (frameInformation == "Strike") {
    this.strikes ++ ;
    return " " ;
  }
}

RunningScore.prototype.updateRuningScore = function (a,b) {
  if (this.strikes > this.DEFAULT_VALUE) {
    this.score = (this.strikes * 10 + a + b) + (a + b)
    this.strikes = this.DEFAULT_VALUE
  }
  else if (this.spares > this.DEFAULT_VALUE) {
    this.score = (this.spares * 10 + a) + (a + b)
    this.spares = this.DEFAULT_VALUE
  } else {
    this.score += (a + b)
  }
}

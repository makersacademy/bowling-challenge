function FrameScore(scoreLogic = new ScoreLogic()) {
  this.scoreLogic = scoreLogic
  this.strikes = 0
  this.spares = 0
  this.currentScore = 0
};

FrameScore.prototype.score = function(a,b) {
  switch (this.scoreLogic.frame(a,b)) {
    case 'strike':
      this.strikes ++
      this.currentScore = 'Strike'
      return this.currentScore
    case 'spare':
      this.spares ++
      this.currentScore = 'Spare'
      return this.currentScore
    case 'continue':
      this.continue(a,b)
      return this.currentScore
  };
}

FrameScore.prototype.continue = function (a,b) {
  if (this.strikes > 0) {
    this.currentScore = (this.strikes * 10 + a + b) + (a + b)
    this.strikes = 0
  }
  else if (this.spares > 0) {
    this.currentScore = (this.spares * 10 + a) + (a + b)
    this.spares = 0
  } else {
    this.currentScore = a + b
  }
}

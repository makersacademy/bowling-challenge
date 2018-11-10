function FrameScore(scoreLogic = new ScoreLogic()) {
  this.scoreLogic = scoreLogic
  this.strikes = 0
  this.spares = 0
  this.frameScore = 0
};

FrameScore.prototype.score = function(a,b) {
  switch (this.scoreLogic.frame(a,b)) {
    case 'strike':
      this.strikes ++
      this.frameScore = 'Strike'
      break
    case 'spare':
      this.spares ++
      this.frameScore = 'Spare'
      break
    case 'continue':
      this.continue(a,b)
  };
}

FrameScore.prototype.continue = function (a,b) {
  if (this.strikes > 0) {
    this.frameScore = (this.strikes * 10 + a + b) + (a + b)
    this.strikes = 0
  }
  else if (this.spares > 0) {
    this.frameScore = (this.spares * 10 + a) + (a + b)
    this.spares = 0
  } else {
    return a + b
  }
}

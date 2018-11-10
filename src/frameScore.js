function FrameScore(scoreLogic = new ScoreLogic()) {
  this.scoreLogic = scoreLogic
  this.strikes = 0
  this.spares = 0
  this.frameScore = 0
};

FrameScore.prototype.score = function(a,b) {
  switch (this.scoreLogic.frame(a,b)) {
    case 'spare':
      this.spares ++ ;
      this.frameScore = 'Spare';
      break
    case 'continue':
      this.continue(a,b);
  };
}

FrameScore.prototype.continue = function (a,b) {
  if (this.spares > 0) {
    this.frameScore = (this.spares * 10 + a) + (a + b);
    this.spares = 0;
  } else {
    return a + b;
  }
}

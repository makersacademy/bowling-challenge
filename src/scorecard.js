function Scorecard() {
  this.frames = [
    frame1 =  new Frame(),
    frame2 =  new Frame(),
    frame3 =  new Frame(),
    frame4 =  new Frame(),
    frame5 =  new Frame(),
    frame6 =  new Frame(),
    frame7 =  new Frame(),
    frame8 =  new Frame(),
    frame9 =  new Frame(),
    frame10 = new Frame(),
  ];
  this.currentBonusFrames = []
  this.futureBonusFrames = []
}

Scorecard.prototype.addScore = function(frameNumber, score) {
  this.frames[(frameNumber - 1)].addScore(score);
}

Scorecard.prototype.totalScore = function() {
  var scores = this.frames.map( frame => frame.totalScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};

Scorecard.prototype.checkScoreType = function(frameNumber, score) {
  if (score === 10) {
    return 'Strike'
  } else if (this.frames[(frameNumber - 1)].totalScore() === 10) {
    return 'Spare'
  } else {
    return 'Ordinary Roll'
  }
}

Scorecard.prototype._setBonusCondition = function(framenumber) {
  this.currentBonusFrames[0] = this.futureBonusFrames[0]
  var scoreType = this.checkScoreType(frame, score)
  if (scoreType === 'Ordinary Roll') {
    this.currentBonusFrames[1] = 0;
    this.futureBonusFrames[0] = 0;
  } else if (scoreType === 'Spare') {
    this.currentBonusFrames[1] = frame;
    this.futureBonusFrames[0] = 0;
  } else if (scoreType = 'Strike') {
    this.currentBonusFrames[1] = frame;
    this.futureBonusFrames[0] = frame;
  }
}

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
  this.currentBonusFrames = [0,0]
  this.futureBonusFrames = [0]
}

Scorecard.prototype.recordScore = function(frameNumber, score) {
  this.addBasicScore(frameNumber, score)
  this.addBonusScore(score)
  this._setBonusCondition(frameNumber, score);
}

Scorecard.prototype.addBasicScore = function(frameNumber, score) {
  this.frames[(frameNumber - 1)].addScore(score);
}

Scorecard.prototype.addBonusScore = function(score) {
  this.currentBonusFrames.forEach( frame => {
    if (frame !== 0) {
      this.frames[frame - 1].addScore(score)
    }
  })
}

Scorecard.prototype._checkScoreType = function(frameNumber, score) {
  if (score === 10) {
    return 'Strike'
  } else if (this.frames[(frameNumber - 1)].totalFrameScore() === 10) {
    return 'Spare'
  } else {
    return 'Ordinary Roll'
  }
}

Scorecard.prototype._setBonusCondition = function(frameNumber, score) {
  this.currentBonusFrames[0] = this.futureBonusFrames[0]
  var scoreType = this._checkScoreType(frameNumber, score)
  if (scoreType === 'Ordinary Roll') {
    this.currentBonusFrames[1] = 0;
    this.futureBonusFrames[0] = 0;
  } else if (scoreType === 'Spare') {
    this.currentBonusFrames[1] = frameNumber;
    this.futureBonusFrames[0] = 0;
  } else if (scoreType = 'Strike') {
    this.currentBonusFrames[1] = frameNumber;
    this.futureBonusFrames[0] = frameNumber;
  }
}

Scorecard.prototype.runningTotal = function() {
  var scores = this.frames.map( frame => frame.totalFrameScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};

Scorecard.prototype.printScores = function() {
  var frameNumber = 1
  this.frames.forEach( frame =>   {
    console.log('Frame ' + frameNumber + ': ' + frame.totalFrameScore());
    frameNumber += 1;
  })
  console.log('Total: ' + this.runningTotal())
}

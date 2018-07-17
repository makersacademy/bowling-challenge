function Scorecard() {
  this._frames = [
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
  this._currentBonusFrames = [0,0]
  this._futureBonusFrames = [0]
}

Scorecard.prototype.recordScore = function(frameNumber, score) {
  this._currentFrame = this._frames[(frameNumber - 1)]
  this._addBasicScore(frameNumber, score);
  this._addBonusScore(score);
  this._setBonusCondition(frameNumber);
}

Scorecard.prototype.printScores = function() {
  var frameNumber = 1
  this._frames.forEach( frame =>   {
    console.log('Frame ' + frameNumber + ': ' + frame.totalFrameScore());
    frameNumber += 1;
  })
  console.log('Total: ' + this._runningTotal())
};

Scorecard.prototype._runningTotal = function() {
  var scores = this._frames.map( frame => frame.totalFrameScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};

Scorecard.prototype._addBasicScore = function(frameNumber, score) {
  this._frames[(frameNumber - 1)].addScore(score);
};

Scorecard.prototype._addBonusScore = function(score) {
  this._currentBonusFrames.forEach( frame => {
    if (frame !== 0) {
      this._frames[frame - 1].addScore(score)
    };
  });
};

Scorecard.prototype._setBonusCondition = function(frameNumber) {
  this._currentBonusFrames[0] = this._futureBonusFrames[0]
  if (frameNumber === 10) {
    this._currentBonusFrames[1] = 0;
    this._futureBonusFrames[0] = 0;
  } else if (this._currentFrame.isStrike()) {
    this._currentBonusFrames[1] = frameNumber;
    this._futureBonusFrames[0] = frameNumber;
  } else if (this._currentFrame.isSpare()) {
    this._currentBonusFrames[1] = frameNumber;
    this._futureBonusFrames[0] = 0;
  } else {
    this._currentBonusFrames[1] = 0;
    this._futureBonusFrames[0] = 0;
  };
};

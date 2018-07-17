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

Scorecard.prototype.recordScore = function(frame, score) {
  this._setCurrentFrame(frame);
  this._addScoreToThisFrame(frame, score);
  this._addBonusToOtherFrames(score);
  this._updateBonusFrames(frame);
}

Scorecard.prototype.printScores = function() {
  var frame = 1
  this._frames.forEach( frame =>   {
    console.log('Frame ' + frame + ': ' + frame.totalFrameScore());
    frame += 1;
  })
  console.log('Total: ' + this._runningTotal())
};

Scorecard.prototype._setCurrentFrame = function(frame) {
  this._currentFrame = this._frames[(frame - 1)]
}

Scorecard.prototype._addScoreToThisFrame = function(frame, score) {
  this._frames[(frame - 1)].addScore(score);
};

Scorecard.prototype._addBonusToOtherFrames = function(score) {
  this._currentBonusFrames.forEach( frame => {
    if (frame !== 0) {
      this._frames[frame - 1].addScore(score)
    };
  });
};

Scorecard.prototype._updateBonusFrames = function(frame) {
  this._bringBonusFramesForward();
  this._setNewBonusFrames(frame);
};

Scorecard.prototype._bringBonusFramesForward = function() {
  this._currentBonusFrames[0] = this._futureBonusFrames[0]
}

Scorecard.prototype._setNewBonusFrames = function(frame) {
  if (frame === 10) {
    this._noBonus();
  } else if (this._currentFrame.isStrike()) {
    this._strikeBonus(frame);
  } else if (this._currentFrame.isSpare()) {
    this._spareBonus(frame);
  } else {
    this._noBonus();
  };
}

Scorecard.prototype._strikeBonus = function(frame) {
  this._currentBonusFrames[1] = frame; this._futureBonusFrames[0] = frame;
}

Scorecard.prototype._spareBonus = function(frame) {
  this._currentBonusFrames[1] = frame; this._futureBonusFrames[0] = 0;
}

Scorecard.prototype._noBonus = function() {
  this._currentBonusFrames[1] = 0; this._futureBonusFrames[0] = 0;
}

Scorecard.prototype._runningTotal = function() {
  var scores = this._frames.map( frame => frame.totalFrameScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};

function ScoreCard() {
  this.currentFrame = 1;
  this.maxFrames = 10;
  this.cumulativeScore = 0;
  this.frames = [];

  for (var i = 0; i < this.maxFrames; i++) {
    this.frames.push(new Frame(i + 1));
  }
}

ScoreCard.prototype.mark = function(pins) {
  var thisFrame = this.getFrame(this.currentFrame);
  thisFrame.setBall(pins);
  if (thisFrame.lastBallRolled === 2 || thisFrame.isStrike()) {
    this.advanceFrame();
  }
  this.checkForUnfinalisedFrames();
}

ScoreCard.prototype.advanceFrame = function() {
  if (this.currentFrame < this.maxFrames) {
    this.currentFrame++;
  }
}

ScoreCard.prototype.checkForUnfinalisedFrames = function() {
  for (var f = 0; f < this.frames.length; f++) {
    if (!this.frames[f].scoreCalculated) {
      this.finaliseStandard(f);
      this.finaliseStrike(f);
      this.finaliseSpare(f);
      this.finaliseLastFrame(f);
    }
  }
}

ScoreCard.prototype.finaliseStandard = function(frame) {
  var thisFrame = this.frames[frame];

  if (this.isLastFrame(thisFrame)) {
    return;
  }
  if (thisFrame.isSpare()) {
    return;
  }
  if (thisFrame.isStrike()) {
    return;
  }

  if (thisFrame.lastBallRolled > 1 && thisFrame.total() < 10) {
    this.finalise(frame, thisFrame.total());
  }
}

ScoreCard.prototype.finaliseLastFrame = function(frame) {
  var thisFrame = this.frames[frame];

  if (!this.isLastFrame(thisFrame)) {
    return;
  }
  var previousFrame = this.frames[frame - 1];

  if (!previousFrame.scoreCalculated) {
    return;
  }

  if (thisFrame.firstTwoBalls() < 10) {
    this.finalise(frame, thisFrame.firstTwoBalls());
  }
  if (thisFrame.lastBallRolled === 3) {
    this.finalise(frame, thisFrame.total());
  }
}

ScoreCard.prototype.finaliseStrike = function(frame) {
  var thisFrame = this.frames[frame];

  if (!thisFrame.isStrike() || this.isLastFrame(thisFrame)) {
    return;
  }

  var nextFrame = this.frames[frame + 1];

  if (!nextFrame.scoreCalculated && !nextFrame.isStrike()) {
    return;
  }
  this.checkStrikeBonus(frame);
  this.checkTripleStrike(frame);
}

ScoreCard.prototype.isLastFrame = function(frame) {
  return frame.frameNumber === this.maxFrames;
}

ScoreCard.prototype.checkStrikeBonus = function(frame) {
  var thisFrame = this.frames[frame];
  var nextFrame = this.frames[frame + 1];

  if (!nextFrame.isStrike() ||
    (this.isLastFrame(nextFrame) && nextFrame.lastBallRolled > 1)) {
    this.finalise(frame, thisFrame.total() + nextFrame.firstTwoBalls());
  }
}

ScoreCard.prototype.checkTripleStrike = function(frame) {
  this.checkTripleStrikeNotInvolvingLastFrame(frame);
  this.checkTripleStrikePenultimateFrame(frame);
}

ScoreCard.prototype.checkTripleStrikeNotInvolvingLastFrame = function(frame) {
  var thisFrame = this.frames[frame];

  if (thisFrame.frameNumber > this.maxFrames - 2) {
    return;
  }

  var nextFrame = this.frames[frame + 1];
  var frameAfterThat = this.frames[frame + 2];

  if (nextFrame.isStrike() && frameAfterThat.isStrike()) {
    this.finalise(frame, thisFrame.total() +
      nextFrame.firstBall() +
      frameAfterThat.firstBall());
  }
}

ScoreCard.prototype.checkTripleStrikePenultimateFrame = function(frame) {
  var thisFrame = this.frames[frame];

  if (!this.isPenultimateFrame(thisFrame.frameNumber)) {
    return;
  }

  var lastFrame = this.frames[frame + 1];

  if (lastFrame.lastBallRolled > 2) {
    this.finalise(frame, thisFrame.total() + lastFrame.firstBall() +
      lastFrame.secondBall());
  }
}

ScoreCard.prototype.isPenultimateFrame = function(frame) {
  return frame.frameNumber === this.maxFrames - 1;
}

ScoreCard.prototype.finaliseSpare = function(frame) {
  var thisFrame = this.frames[frame];
  var nextFrame = this.frames[frame + 1];

  if (!thisFrame.isSpare() || this.isLastFrame(thisFrame)) {
    return;
  }
  if (nextFrame.lastBallRolled > 1) {
    this.finalise(frame, thisFrame.total() + nextFrame.firstBall());
  }
}

ScoreCard.prototype.finalise = function(frame, totalForFrame) {
  this.cumulativeScore = this.cumulativeScore + totalForFrame;
  this.frames[frame].finalise(this.cumulativeScore);
}

ScoreCard.prototype.card = function() {
  return this.frames.map(function(frame) {
    return frame.totalForFrame;
  });
}

ScoreCard.prototype.getFrame = function(frame) {
  //
  // There is a frame in progress and it only has one roll.
  //
  return this.frames[frame - 1];
}

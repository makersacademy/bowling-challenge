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
  this.updateScores();
}

ScoreCard.prototype.advanceFrame = function() {
  if (this.currentFrame < this.maxFrames) {
    this.currentFrame++;
  }
}

ScoreCard.prototype.updateScores = function() {
  for (var framesIndex = 0; framesIndex < this.frames.length; framesIndex++) {
    if (!this.frames[framesIndex].scoreCalculated) {
      this.finaliseStandard(framesIndex);
      this.finaliseStrike(framesIndex);
      this.finaliseSpare(framesIndex);
    }
  }
}

ScoreCard.prototype.finaliseStandard = function(frame) {
  var thisFrame = this.frames[frame];

  if ((thisFrame.lastBallRolled === 2 && thisFrame.total() < 10) ||
    (thisFrame.lastBallRolled === 3)) {
    this.finalise(frame, thisFrame.total());
  }
}

ScoreCard.prototype.finaliseStrike = function(frame) {
  var thisFrame = this.frames[frame];

  if (!thisFrame.isStrike() || this.isLastFrame(thisFrame)) {
    return;
  }

  var nextFrame = this.frames[frame + 1];

  if (nextFrame.lastBallRolled === 2) {
    this.finalise(frame, thisFrame.total() + nextFrame.total());
    return;
  }
  this.checkTripleStrike(frame);
}

ScoreCard.prototype.checkTripleStrike = function(frame) {
  var thisFrame = this.frames[frame];
  if (thisFrame.frameNumber === this.maxFrames - 1) {
    return;
  }
  var nextFrame = this.frames[frame + 1];
  var frameAfterThat = this.frames[frame + 2];

  if (nextFrame.isStrike() && frameAfterThat.isStrike()) {
    this.finalise(frame, thisFrame.total() +
      nextFrame.total() +
      frameAfterThat.total());
  }

}

ScoreCard.prototype.isLastFrame = function(frame) {
  return frame.frameNumber === this.maxFrames;
}

ScoreCard.prototype.finaliseSpare = function(frame) {
  var thisFrame = this.frames[frame];
  var nextFrame = this.frames[frame + 1];

  if (!thisFrame.isSpare() || this.isLastFrame(thisFrame)) {
    return;
  }
  if (nextFrame.lastBallRolled === 1) {
    this.finalise(frame, thisFrame.total() + nextFrame.total());
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

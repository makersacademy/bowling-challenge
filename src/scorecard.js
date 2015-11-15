var Frame = require('../src/frame.js');
function ScoreCard() {
  this.currentFrame = 1;
  this.currentBallInFrame = 1;
  this.maxFrames = 10;
  this.frames = [];
  this.frames.push(new Frame(this.currentFrame));
}

ScoreCard.prototype.mark = function(pins) {
  this.getFrame(this.currentFrame).setBall(this.currentBallInFrame, pins);
  this.currentBallInFrame++;
  this.checkIfNewFrameNeeded(this.currentFrame);
  this.checkForUnfinalisedFrames();
}

ScoreCard.prototype.totalForFrame = function() {
  return this.getFrame(this.currentFrame).totalForFrame;
}

ScoreCard.prototype.checkForUnfinalisedFrames = function() {
  for (var f = 0; f < this.frames.length; f++) {
    if (!this.frames[f].scoreCalculated) {
      this.finaliseStrike(f);
      this.finaliseSpare(f)
    }
  }
}

ScoreCard.prototype.finaliseStrike = function(frame) {
  if (!this.frames[frame].isStrike()) {return;}
  if (!this.frames[frame+1].isStrike()) {
    this.frames[frame].finalise(this.frames[frame].total() +
                                this.frames[frame+1].strikeBonus());

  }
  else {
    this.frames[frame].finalise(this.frames[frame].total() +
                                this.frames[frame+1].spareBonus() +
                                this.frames[frame+2].spareBonus());
  }
}

ScoreCard.prototype.finaliseSpare = function(frame) {
  if (!this.frames[frame].isSpare()) {return;}
  this.frames[frame].finalise(this.frames[frame].total() +
                              this.frames[frame+1].spareBonus());
}


ScoreCard.prototype.checkIfNewFrameNeeded = function(frame) {
  //
  // Case where it is not the final frame and two rolls have already
  // taken place. Create a new one and make it current.
  //
  if (this.isStrike(frame) ||
      (this.getFrame(frame).frameNumber < this.maxFrames &&
       this.currentBallInFrame === 3)) {
         this.frames.push(new Frame(frame+1));
         this.currentFrame++;
         this.currentBallInFrame = 1;
         return this.frames[frame];
       }
}

ScoreCard.prototype.isStrike = function(frame) {
  return this.frames[frame-1].isStrike();
}

ScoreCard.prototype.isSpare = function(frame) {
  return this.frames[frame-1].isSpare();
}

ScoreCard.prototype.card = function() {
  return this.frames.map(function(frame){
    return frame.totalForFrame;
  });
}

ScoreCard.prototype.getFrame = function(frame) {
  //
  // There is a frame in progress and it only has one roll.
  //
  return this.frames[frame-1];
}
module.exports = ScoreCard;

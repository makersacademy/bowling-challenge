function Scorecard() {
  this.frames = [];
}

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scorecard.prototype.getRollScore = function(frameIndex, roll) {
  if (frameIndex < this.frames.length){
    return this.frames[frameIndex].rolls[roll];
  } else {
    return 0;
  }
};

Scorecard.prototype.total = function() {
  var runningTotal = 0;
  for(var i = 0; i < this.frames.length; i ++) {
    runningTotal += this.bonusFromSpare(i);
    runningTotal += this.bonusFromStrike(i);
    runningTotal += this.frames[i].total();
  }
  return runningTotal;
};

Scorecard.prototype.bonusFromSpare = function(frameIndex) {
  if (this.isCurrentFrameSpare(frameIndex)){
    return this.getRollScore(frameIndex + 1, 0)
  }
  else { return 0 }
};

Scorecard.prototype.isCurrentFrameSpare = function(frameIndex) {
  return (this.frames[frameIndex].isSpare())
};

Scorecard.prototype.bonusFromStrike = function(frameIndex) {
  var bonusTotal = 0;
  if (this.isCurrentFrameStrike(frameIndex)){
    if (this.isNextFrameStrike(frameIndex)){
      bonusTotal += 10;
      bonusTotal += this.getRollScore(frameIndex + 2, 0);
    } else {
    bonusTotal += this.getRollScore(frameIndex + 1, 0) + this.getRollScore(frameIndex + 1, 1)
   }
}
  return bonusTotal;
};

Scorecard.prototype.isCurrentFrameStrike = function(frameIndex) {
  return (this.frames[frameIndex].isStrike())
};

Scorecard.prototype.isNextFrameStrike = function(frameIndex) {
  return (this.frames[frameIndex + 1] && this.frames[frameIndex + 1].isStrike())
};
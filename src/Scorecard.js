function Scorecard() {
  this.frames = [];
}

Scorecard.prototype.addFrame = function(frame) {
  if(!this.gameOver()){
    this.frames.push(frame);
  }
  else {
    throw ("Game Over");
  }
};

Scorecard.prototype.gameOver = function() {
  return this.frames.length === 10;
};

Scorecard.prototype.getRollScore = function(frameIndex, roll) {
  if (frameIndex < this.frames.length){
    return this.frames[frameIndex].rolls[roll];
  } else {
    return 0;
  }
};

Scorecard.prototype.getFrameScore = function(frameIndex, roll1, roll2) {
  if (frameIndex < this.frames.length){
    return this.frames[frameIndex].rolls[roll1] + this.frames[frameIndex].rolls[roll2];
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

Scorecard.prototype.isCurrentFrameSpare = function(frameIndex) {
  return (this.frames[frameIndex].isSpare())
};

Scorecard.prototype.bonusFromSpare = function(frameIndex) {
  if (this.isCurrentFrameSpare(frameIndex)){
    return this.getRollScore(frameIndex + 1, 0)
  }
  else { return 0 }
};

Scorecard.prototype.isCurrentFrameStrike = function(frameIndex) {
  return (this.frames[frameIndex].isStrike())
};

Scorecard.prototype.isNextFrameStrike = function(frameIndex) {
  return (this.frames[frameIndex + 1] && this.frames[frameIndex + 1].isStrike())
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


function Scorecard() {
  this.frames = [];
}

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scorecard.prototype.getRollScore = function(frame, roll) {
  return this.frames[frame].rolls[roll];
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

// Scorecard.prototype.getSpareBonus = function(i) {
//   (this.frames[i].isSpare()){

//   }
// }

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
  if (this.isCurrentFrameStrike(frameIndex)){
    return this.getRollScore(frameIndex + 1, 0) + this.getRollScore(frameIndex + 1, 1)
  }
  else { return 0 }
};

Scorecard.prototype.isCurrentFrameStrike = function(frameIndex) {
  return (this.frames[frameIndex].isStrike())
};
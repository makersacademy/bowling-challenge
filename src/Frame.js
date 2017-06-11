function Frame() {
  this.firstBowl = 0;
  this.secondBowl = 0;
  // this.frame_rolls = [null, null];
}

Frame.prototype.getFirstBowl = function(pins_knocked) {
  this.firstBowl = pins_knocked
};

Frame.prototype.getSecondBowl = function(pins_knocked) {
  if(this.firstBowl === 10) throw('cannot bowl again if first bowl was a strike');
  this.secondBowl = pins_knocked
}

Frame.prototype.addFrameScore = function() {
  return this.firstBowl + this.SecondBowl;
};

Frame.prototype.getFrame = function() {
  return [firstRoll, secondRoll]
  // return this.frames.push(addFrameScore)
};

Frame.prototype.isStrike = function() {
  return !!this.firstBowl === 10
};

Frame.prototype.isSpare = function() {
  return !!this.addFrameScore() === 10
};

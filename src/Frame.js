function Frame() {
  this.firstBowl = 0;
  this.secondBowl = 0;
  // this.frame_rolls = [null, null];
}

Frame.prototype.getFirstBowl = function(pins_knocked) {
  if(!Number.isInteger(pins_knocked)) throw('this is not a number, please enter a number')
  if(pins_knocked > 10) throw ('Cannot score higher than 10')
  this.firstBowl = pins_knocked
};

Frame.prototype.getSecondBowl = function(pins_knocked) {
  if(this.firstBowl === 10) throw ('cannot bowl again if first bowl was a strike');
  if(this.secondBowl > 10) throw ('Cannot score higher than 10')
  if(!Number.isInteger(pins_knocked)) throw('this is not a number, please enter a number')
  this.secondBowl = pins_knocked
}

Frame.prototype.addFrameScore = function() {
  return this.firstBowl + this.secondBowl;
};

Frame.prototype.getFrame = function() {
  return [this.firstBowl, this.secondBowl]
};

Frame.prototype.isStrike = function() {
  return this.firstBowl === 10 ? true : false
};

Frame.prototype.isSpare = function() {
  return this.addFrameScore() === 10 ? true : false
};

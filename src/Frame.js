function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.pins = 0;
  this.rollCount = 0;
  this.rolls = [];
}

Frame.prototype.registerRoll = function(knockingDownPins) {
  this.pins += knockingDownPins;
  this.rollCount ++;
  this.rolls.push(knockingDownPins);
};

Frame.prototype.isOver = function() {
  return (this.rollCount === 2 || this.pins === 10);
};

Frame.prototype.isStrike = function() {
  return (this.rollCount === 1 && this.pins === 10);
};

Frame.prototype.isSpare = function() {
  return (this.rollCount === 2 && this.pins === 10);
};

Frame.prototype.totalFrame = function() {
  return this.pins;
};
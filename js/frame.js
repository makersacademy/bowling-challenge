var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonusRoll = 0;
  this.frameNumber = 1;
};

  Frame.prototype.nextFrame = function() {
    this.frameNumber += 1
  };
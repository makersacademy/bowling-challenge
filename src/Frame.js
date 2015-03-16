var Bowl = function() {
  this.frameScore = 0;
  this.maximumFrameScore = 10;
  this.pins = 10;
  this.maximumRollScore = this.pins;
  this.frameNumber = 1;
  this.maximumFrames = 10;
  this.strikes = 0;
  this.spares = 0;
};
Bowl.prototype.nextFrame = function() {
  this.frameNumber++;
  if (this.frameNumber > this.maximumFrames) this.frameNumber = this.maximumFrames;
};
Bowl.prototype.roll1 = function(number) {
  this.roll1 = number;
  if (this.roll1 > this.maximumRollScore) this.roll1 = this.maximumRollScore;
  if (number === 10) {
    this.strikes += 1;
    this.nextFrame();
  } else {
    this.pins -= number;
  }
};
Bowl.prototype.roll2 = function(number) {
  this.roll2 = number;
  this.pins -= number;
  if (this.pins === 0) {
    this.spares += 1;
    this.nextFrame();
  } else {
    this.nextFrame();
  }
};

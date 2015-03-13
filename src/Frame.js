var Bowl = function() {
 this.roll1 = 0;
 this.roll2 = 0;
 this.score = 0;
 this.pins = 10;
 this.maximumHit = 10;
 this.frameNumber = 1;
 this.maximumFrames = 10;
};

Bowl.prototype.nextFrame = function() {
  this.frameNumber++;
  if (this.frameNumber > this.maximumFrames)
    this.frameNumber = this.maximumFrames;
};

Bowl.prototype.pinHit = function(roll1) {
  this.pins -= 1;
};

Bowl.prototype.roll = function(number) {
  number = number;
  this.roll1 = number;
  if (this.roll1 > this.maximumHit)
    this.roll1 = this.maximumHit;
};

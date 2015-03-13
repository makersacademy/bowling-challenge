var Bowl = function() {
 this.frame1 = 0;
 this.frame2 = 0;
 this.pins = 10;
 this.frameNumber = 1;
};

Bowl.prototype.nextFrame = function() {
  this.frameNumber++;
};

Bowl.prototype.pinHit = function() {
  this.pins -= 1;
};

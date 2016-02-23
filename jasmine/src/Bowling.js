function Bowling() {
  this.frames = {};
  this.currentFrame = 1;
  this.createFrame();
};

Bowling.prototype.pinsHit = function(number) {
  this.createFrame();
  if (this.isOverTen(number)) {
    throw new Error("There are only 10 pins");
  }
  this.frames[this.currentFrame].push(number);
  if (this.isFrameFull()) {this.currentFrame ++}
};

Bowling.prototype.createFrame = function() {
  if (!(this.currentFrame in this.frames)) {
    this.frames[this.currentFrame] = [];
  };
};

Bowling.prototype.isFrameFull = function() {
  return (this.frames[this.currentFrame].length == 2);
};

Bowling.prototype.isOverTen = function(number) {
  if (this.frames[this.currentFrame].length === 0) {
    return false;
  } else {
    sum = this.frames[this.currentFrame][0] + number;
    return (sum > 10);
  }
};

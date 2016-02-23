function Bowling() {
  this.frames = {};
  this.currentFrame = 1;
};

Bowling.prototype.pinsHit = function(number) {
  this.createFrame();
  this.frames[this.currentFrame].push(number);
  console.log(this.frames)
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

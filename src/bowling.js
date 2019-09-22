function Bowling() {
  this.frames = [];
  this.currentFrame = 0;
  this.maxRolls = 2;
};

Bowling.prototype.startNewFrame = function() {
  this.currentFrame += 1;
  this.frames[this.currentFrame - 1] = [];
};

Bowling.prototype.addScore = function(number) {
  if (this.frames[this.currentFrame-1].length >= this.maxRolls) throw 'START A NEW FRAME'
  this.frames[this.currentFrame-1].push(number);
};

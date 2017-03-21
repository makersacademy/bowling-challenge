var Game = function() {
  this.currentFrame = [];
  this.completedFrames = [];
};

Game.prototype.roll = function(pinsKnockedDown) {
  if (pinsKnockedDown == 10) {
    this.completedFrames.push([10, 0]);
  }
  else {
    this.newFrame(pinsKnockedDown);
  };
};

Game.prototype.newFrame = function(pinsKnockedDown) {
  if (this.currentFrame.length == 0) {
    this.currentFrame[0] = pinsKnockedDown;
  }
  else {
    this.currentFrame[1] = pinsKnockedDown;
    (this.completedFrames).push(this.currentFrame);
    this.currentFrame = [];
  };
};

Game.prototype.score = function() {
  var total = 0;
  for (var i = 0; i < this.completedFrames.length; i++) {
    var frame = this.completedFrames[i];
    for (var j = 0; j < frame.length; j++) {
      total += frame[j];
    }
  }
  return total;
};

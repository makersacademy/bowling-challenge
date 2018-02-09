function Game() {
  this.frames = []
  // this.scores = []
  // this.frameScores = []
  // this.runningTotal =
};

Game.prototype.start = function(length) {
  for(var i=0; i < length; i++){
    this.frames.push(new Frame());
  }
};

Game.prototype.roll = function(frame, pins) {
  (this.frames[frame-1]).enterRoll(pins)
};

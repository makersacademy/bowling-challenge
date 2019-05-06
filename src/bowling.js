function Game() {
  this.frameIndex = 0;
  this.frames = [];
};

Game.prototype.roll = function(pins) {
  if (pins > 10) {
    throw 'You cannot bowl more than 10!'
  } else {
    this.frames.push(pins)
  };
};

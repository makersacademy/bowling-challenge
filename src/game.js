var Game = function(frameOne = new BowlingFrame()) {
  this.frameOne = frameOne;
};

Game.prototype = {
  readScore: function(frame) {
    return frame.total();
  }
};

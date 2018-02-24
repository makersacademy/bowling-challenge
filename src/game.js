var Game = function(frameOne = new BowlingFrame()) {
  this.frameOne = frameOne;
};

Game.prototype = {
  readScore: function(frame) {
    return frame.total();
  },

  bowl: function(frame) {
    if (typeof frame.firstRollScore == 'number') {
      return frame.secondRoll();
    }
    return frame.firstRoll();
  }
};

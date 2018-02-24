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
  },

  strikeTracker: function(frame) {
    if (frame.firstRollScore === 10) {
      frame.secondRollScore = 0;
      return true;
    }
    return false;
  }
};

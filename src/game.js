var Game = function(
  frameOne = new BowlingFrame(),
  scoreboard = new Scoreboard()
) {
  this.frameOne = frameOne;
  this.scoreboard = scoreboard;
  this.currentFrame = this.frameOne;
};

Game.prototype = {
  readScore: function(frame) {
    return frame.total();
  },

  bowl: function(frame) {
    if (typeof frame.firstRollScore == 'number') {
      return frame.secondRoll();
    }
    var score = frame.firstRoll();
    this.strikeTracker(frame);
    return score;
  },

  strikeTracker: function(frame) {
    if (frame.firstRollScore === 10) {
      frame.secondRollScore = 0;
      return true;
    }
    return false;
  },

  spareTracker: function(frame) {
    if (frame.total() === 10) {
      return true;
    }
    return false;
  },

  createNewFrame: function() {
    this.frameTwo = new BowlingFrame();
    this.currentFrame = this.frameTwo;
  }
};

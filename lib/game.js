function Game () {
  this._frames = [];
  this._scores = []
};

Game.prototype = {

  storeFrame: function(frame) {
    this._frames.push(frame);
  },

  frameScores: function() {
    return this._scores;
  },

  storeFrameScore: function(frame) {
    this._scores.push(frame.score());
  },

}

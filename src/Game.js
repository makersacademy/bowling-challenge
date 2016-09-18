// responsible for tracking the total score and # of frames

'use-strict';

function Game() {
  this._score = 0;
  this._rounds = [];
}

Game.prototype = {

  showRounds: function() {
    return this._rounds;
  },

  showScore: function() {
    return this._score;
  },

  play: function () {
    frame.roll();
    if (frame.over() === true) {
      this._score -= frame.score;
      this._framesToPlay --;
    }
  }
}

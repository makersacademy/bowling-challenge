// responsible for tracking the total score and # of frames

'use-strict';

function Game() {
  this._framesToPlay = 10;
  this._score = 0;
}

Game.prototype = {

  showFramesToPlay: function() {
    return this._framesToPlay;
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

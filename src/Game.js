'use-strict';

function Game () {
  this._pins = 10;
  this._framesToPlay = 10;
  this._rollsRemaining = 2;
  this._score = 0;
}

Game.prototype = {
  showPins: function() {
    return this._pins;
  },

  showFramesToPlay: function() {
    return this._framesToPlay;
  },

  showRollsRemaining: function() {
    return this._rollsRemaining;
  },

  showScore: function() {
    return this._score;
  }


}

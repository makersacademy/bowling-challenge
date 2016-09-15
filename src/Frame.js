// responsible for tracking the frame

'use-strict';

function Frame() {
  this._pinsLeft = 10;
  this._rollsLeft = 2;
  this._score = 0;
  this._bonus = false;
}

Frame.prototype = {

  showPinsLeft: function() {
    return this._pinsLeft;
  },

  showRollsLeft: function() {
    return this._rollsLeft;
  },

  showScore: function() {
    return this._score;
  },

  showBonus: function() {
    return this._bonus;
  },

  roll: function() {
    this._rollsLeft --;
    this._pinsLeft = roll.score();
  }

}

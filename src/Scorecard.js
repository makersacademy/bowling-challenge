'use strict';

function Scorecard() {
  this._score = 0
  this._frames = []
  var roll_1 = function roll_1() {
  };
  var roll_2 = function roll_2() {
  };
}

Scorecard.prototype = {
  getScore: function() {
    return this._score
  },
  roll: function(pins) {
    this._frames.push(pins)
    return this._score += pins
  },

};

// responsible for tracking the frame

'use-strict';

function Round() {
  this._pinsLeft = 10;
  this._rolls = [];
  this._rawScore = 0;
  this._spare = false;
  this._strike = false;
}

Round.prototype = {

  showPinsLeft: function() {
    return this._pinsLeft;
  },

  showRolls: function() {
    return this._rolls;
  },

  showSpare: function() {
    return this._spare;
  },

  showStrike: function() {
    return this._strike;
  },

  showRawScore: function() {
    return this._rawScore;
  },

  showNumRolls: function() {
    return this._rolls.length;
  },

  firstRollPinsHit: function() {
    return this._rolls[0].showPinsHit();
  },

  roll: function (roll) {
    var newRoll = typeof roll !== 'undefined' ? roll : new Roll(this._pinsLeft);
    this._rolls.push(newRoll);
    this._pinsLeft -= newRoll.showPinsHit();
    this._rawScore += newRoll.showPinsHit();
    if (newRoll.showPinsHit() === 10) { this._strike = true }
    if ((this._rolls[this._rolls.length-1].showPinsHit() + newRoll.showPinsHit()) === 10) { this._spare = true }
  },



}

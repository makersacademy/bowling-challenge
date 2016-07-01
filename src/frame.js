'use strict';

function Frame(firstRoll, isTenth) {
  const MAX_PINS_PER_ROLL = 10;
  const STRIKE = 10;

  if (firstRoll > MAX_PINS_PER_ROLL) {
    throw ('Cannot roll: too many pins');
  };
  
  this._complete = firstRoll === STRIKE && !isTenth;
  this._strike = firstRoll === STRIKE;
  this.firstRoll = firstRoll;
  this.secondRoll = 0;
  this.thirdRoll = 0;
  this.bonus = 0;
  this._isTenth = isTenth;
};

Frame.prototype = {
  
  getScore: function() {
    return this.firstRoll + this.secondRoll + this.thirdRoll + this.bonus;
  },

  isComplete: function() {
    return this._complete;
  },

  isSpare: function() {
    return this.secondRoll > 0 && (this.firstRoll + this.secondRoll === 10);
  },

  roll: function(pins) {
    if (pins > 10 || (this.getScore() + pins) > 10 && !this._isTenth) {
      throw ('Cannot roll: too many pins');
    }
    if (!this._complete && !this._isTenth) {
      this.secondRoll = pins;
      this._complete = true;
    } else if (!this._complete && this._isTenth) {
      this.secondRoll == 0 ? this.secondRoll = pins : this.thirdRoll = pins;
      if (this.secondRoll !== 0) { this._complete = true; }
    } else {
      ('Cannot roll: frame already completed');
    }
  },

  isStrike: function() {
    return this._strike;
  },

  addBonus: function(bonusPoints) {
    if (this.bonus === 0) {
      this.bonus +=  bonusPoints;
    }
  },

};

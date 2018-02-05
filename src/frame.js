const MAX_PINS = 10

function Frame(rolls = []) {

  this.rolls = rolls

};

Frame.prototype = {

  roll: function(pins) {
    this.rolls.push(pins)
  },

  _firstRoll: function() {
    return this.rolls[0];
  },

  _secondRoll: function() {
    return this.rolls[1];
  },

  score: function() {
    return (this._firstRoll() + this._secondRoll());
  },

  isAStrike: function() {
    return this._firstRoll() === MAX_PINS;
  },

  isASpare: function() {
    return this._firstRoll() + this._secondRoll() === MAX_PINS;
  },


}

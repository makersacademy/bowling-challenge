function Frame() {

  this.rolls = []

};

Frame.prototype = {

  roll: function(pins) {
    this.rolls.push(pins);
  },

  firstRoll: function() {
    return this.rolls[0];
  },

  secondRoll: function() {
    return this.rolls[1];
  },

  score: function() {
    return (this.firstRoll() + this.secondRoll());
  },

  strike: function() {
    return this.firstRoll() === 10;
  },

  spare: function() {
    return (this.score() === 10) && (!this.strike());
  },

};

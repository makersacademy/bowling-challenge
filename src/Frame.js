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


};

function Frame() {

  this.rolls = []
  var index = 0;

};

Frame.prototype = {

  roll: function(pins) {
    this.rolls.push(pins);
  },

  // firstRoll: function() {
  //   return this.rolls[0];
  // },
  //
  // secondRoll: function() {
  //   return this.rolls[1];
  // },


  score: function() {
    var index = 0;
    return this.rolls[index] + this.rolls[index + 1];
  },

  strike: function() {
    var index = 0;
    return this.rolls[index] === 10;
  },

  spare: function() {
    return (this.score() === 10) && (!this.strike());
  },

  strikeScore: function() {
    var index = 0;
    return (this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2]);
  },

};

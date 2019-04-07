function Scorecard () {
  this.rolls = [];
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    this.rolls.push(pins);
    return pins;
  },

  total: function() {
    return this.rolls.reduce(function(acc, val) { return acc + val; }, 0)
  },

  isComplete: function() {
    return true;
  }

}

function Scorecard () {}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    return pins;
  },

  total: function() {
    return 0;
  },

  isComplete: function() {
    return true;
  }

}

function Scorecard() {
  this.frames = [];
}

Scorecard.prototype = {
  constructor: Scorecard,
  isComplete: function() {
    if (this.frames.length === 10) {
      return true;
    } else {
      return false;
    }
  },
}
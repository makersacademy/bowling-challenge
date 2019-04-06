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
  totalScore: function() {
    var total = 0;
    for (var i = 0; i < this.frames.length; i++) {
      var frameScore = this.frames[i].totalScore;
      total = total + frameScore;
    }
    return total;
  },
}
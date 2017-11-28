function Bowling() {
  this.scorecard = [];
}

Bowling.prototype = {
  addToScorecard: function(frame) {
    this.scorecard.push(frame);
  }
}

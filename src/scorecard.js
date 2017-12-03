function Scorecard() {
  this.frameResults = [];
  this.frameScores = []
};

Scorecard.prototype.addFrame = function (frame) {
  this.frameResults.push(frame);
};

Scorecard.prototype.updateScores = function () {
  var frame = this.frameResults[this.frameResults.length - 1];
  var score = frame.score.reduce(function (total, amount) {
    return total + amount;
  });
  if (frame.spare === false && frame.strike === false) {
    if (this.frameResults.length > 1 && this.frameResults[this.frameResults.length - 2].spare === true) {
      var spareScore = 10 + frame.getBowlOneScore();
      this.frameScores.push(spareScore);
      this.frameScores.push(score);
    } else if (this.frameResults.length > 1 && this.frameResults[this.frameResults.length - 2].strike === true) {
      var strikeScore = 10 + frame.getBowlOneScore() + frame.getBowlTwoScore();
      this.frameScores.push(strikeScore);
      this.frameScores.push(score);
    } else {
      this.frameScores.push(score);
    }
  } else {
    return;
  }
};

function bowlingGame() {
  this.scores = [];
}

bowlingGame.prototype.roll = function(pins) {
  this.scores.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;

  for (var scoreIndex = 0; scoreIndex < this.scores.length; scoreIndex++) {
    if (this.scores[scoreIndex] === 10) {
      result += (this.scores[scoreIndex] + this.scores[scoreIndex + 1] + this.scores[scoreIndex + 2]);
    } else {
      result += (this.scores[scoreIndex] + this.scores[scoreIndex + 1]);
      if (this.scores[scoreIndex] + this.scores[scoreIndex + 1] === 10) {
        result += this.scores[scoreIndex + 2];
      }
      scoreIndex += 1;
    }
  }
  return result;
};

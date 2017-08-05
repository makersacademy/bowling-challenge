function bowlingGame() {
  this.scores = [];
}

bowlingGame.prototype.roll = function(pins) {
  this.scores.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;

  for (var i = 0; i < this.scores.length; i++) {
    result += this.scores[i];
  }

  return result;
};

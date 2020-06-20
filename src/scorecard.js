function Scorecard(scores) {
  this.scores = scores;
}

Scorecard.prototype.score = function(num) {
  var total = 0
  for (var i = 0; i < num; i ++) {
    total += this.scores[i].score()
  }
  return (total);
}

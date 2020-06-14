function Scorecard(scores) {
  this.scores = scores;
}

Scorecard.prototype.score = function(num) {
  total = 0
  for (i = 0; i < num; i ++) {
    total += this.scores[i].score()
  }
  return (total);
}

function Scorecard(scores) {
  this.scores = scores;
  console.log(this.scores)
}

Scorecard.prototype.score = function(num) {
  return (this.scores[0].score());
}

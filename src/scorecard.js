function Scorecard() {
  this.scores = []
  this.total = 0
};

Scorecard.prototype.enterScore = function(score) {
  this.scores.push(score)
  this.total += score
};

sc = new Scorecard;
sc.enterScore(6);
console.log(sc.scores[0])

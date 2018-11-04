function Scorecard() {
  this.scores = []
};


Scorecard.prototype.enterScore = function(score) {
  this.scores.push(score)
  if (score === 10 && this.scores.length <= 18) { this.scores.push("-") }
};


sc = new Scorecard;
sc.enterScore(6);
console.log(sc.scores[0])

function Scorer(scores) {
  this.scores = scores
  this.frame_scores = []
  this.game_total = 0
};

Scorer.prototype.total = function() {
  sum = 0
  for (i in this.scores) { sum += this.scores[i] }
  if (this.scores.length % 2 === 1) { sum -= this.scores[this.scores.length -1] }
  return sum
};

Scorer.prototype.scoreFrames = function() {
  completeFrames = this.scores.length
  if (this.scores.length % 2 === 1) {completeFrames -= 1}
  for (i = 0; i < completeFrames; i += 2)
    { this.frame_scores.push(this.scores[i] + this.scores[i+1]) }
};

sc = new Scorer
sc.scores = [1,2]
// console.log(this.scores)
sc.scoreFrames()
console.log(sc.frame_scores)

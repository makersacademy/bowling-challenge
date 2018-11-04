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
  frames = this.calculateFrames()
  for (i = 0; i < frames * 2; i += 2)
    { combined_score = this.scores[i] + this.scores[i+1]
    if(this.scores[i] === 10) {
      score = this.scoreStrike(i)  }
    else if (combined_score === 10) { score = this.scoreSpare(i) }
    else { score = combined_score }
    if (typeof score != "undefined" && score === score) {this.frame_scores.push(score) }
  };
};

Scorer.prototype.calculateFrames = function() {
  return Math.floor(this.scores.length / 2)
};

Scorer.prototype.scoreStrike = function(strikePos) {
  remainingScores = this.scores.slice(strikePos + 1, this.scores.length)
  filteredScores = remainingScores.filter(this._isScore)
  if ( filteredScores.length >= 2 )
    { return this.scores[strikePos] + filteredScores[0] + filteredScores[1] }
};

Scorer.prototype.scoreSpare = function(spareFramePos) {
  if ( this.scores.length >= spareFramePos + 2 )
    { return 10 + this.scores[spareFramePos + 2] }
};

Scorer.prototype._isScore = function(char) {
  return char != "-"
}

sc = new Scorer
sc.scores = [5,5]
sc.scoreFrames()
console.log(sc.frame_scores)

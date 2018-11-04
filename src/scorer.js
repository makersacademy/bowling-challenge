function Scorer(scores) {
  this.scores = scores
  this.frame_scores = []
  this.game_total = 0
};

Scorer.prototype.total = function() {
  sum = 0
  for (i in this.frame_scores) { sum += this.frame_scores[i] }
  return sum
};

Scorer.prototype.scoreFrames = function() {
  frames = this._calculateFrames(this.scores)
  for (i = 0; i < frames * 2; i += 2) {
    score = this.scoreRoll(i)
    if (score >= 0) {this.frame_scores.push(score) }
  };
};

Scorer.prototype.scoreRoll = function(rollPos) {
  combined_score = this.scores[rollPos] + this.scores[rollPos + 1]
  if(this.scores[rollPos] === 10) { return this.scoreStrike(rollPos) }
  else if (combined_score === 10) { return this.scoreSpare(rollPos) }
  return combined_score
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

Scorer.prototype._isScore = char => char != "-"

Scorer.prototype._calculateFrames = scores => Math.floor(scores.length / 2)

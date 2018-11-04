function Scorer (scores) {
  this.scores = scores
  this.frame_scores = []
};

Scorer.prototype.total = function () {
  var sum = 0
  for (var i in this.frame_scores) { sum += this.frame_scores[i] }
  return sum
}

Scorer.prototype.scoreFrames = function () {
  var frames = this._calculateFrames(this.scores)
  for (var i = 0; i < frames * 2; i += 2) {
    var score = this.scoreRoll(i)
    if (score >= 0) { this.frame_scores.push(score) }
  };
}

Scorer.prototype.scoreRoll = function (rollPos) {
  var combinedScore = this.scores[rollPos] + this.scores[rollPos + 1]
  if (this.scores[rollPos] === 10) {
    return this.scoreStrike(rollPos)
  } else if (combinedScore === 10) { return this.scoreSpare(rollPos) }
  return combinedScore
}

Scorer.prototype.scoreStrike = function (strikePos) {
  var remainingScores = this.scores.slice(strikePos + 1, this.scores.length)
  var filteredScores = remainingScores.filter(this._isScore)
  if (filteredScores.length >= 2) {
    return this.scores[strikePos] + filteredScores[0] + filteredScores[1]
  }
}

Scorer.prototype.scoreSpare = function (sparePos) {
  if (this.scores.length >= sparePos + 2) {
    return 10 + this.scores[sparePos + 2]
  }
}

Scorer.prototype._isScore = char => char !== '-'

Scorer.prototype._calculateFrames = scores => Math.floor(scores.length / 2)


// module.exports = Scorer();

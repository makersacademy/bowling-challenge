function Scorecard () {
  this.scores = []
  // sc = new scorer.Scorer
}

Scorecard.prototype.enterScore = function (score) {
  if (this.inGame()) {
    this.scores.push(score)
    if (score === 10 && this.scores.length <= 18) { this.scores.push('-') }
    // sc.scoreFrames(this.scores)
  }
}

Scorecard.prototype.inGame = function() {
  if (this.scores.length < 20) return true
  var firstRoll = this.scores[18]
  var secondRoll = this.scores[19]
  if (this.scores.length === 20 && (firstRoll === 10 || firstRoll + secondRoll === 10) ) return true
  return false
}

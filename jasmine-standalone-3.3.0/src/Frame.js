function Frame () {
}

var Frame = function(rolls) {
  this.rolls = rolls
  this.maxpins = 10
}


Frame.prototype.oneframeScore = function() {
  return this.rolls.reduce(function(score, score) {
    return score + score;
  })
}

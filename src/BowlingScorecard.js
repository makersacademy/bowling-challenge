class BowlingScorecard {
  enterRoll(score) {
    // if (score > 10) {
    //   return "Invalid score entered, score must be between 0 and 10."
    // }

    if (this._isInvalidScore(score)) return "Invalid score entered, score must be between 0 and 10.";

    return score
  }

  _isInvalidScore(score) {
    if (score > 10 || score < 0) return true
    if (`${score}`.match(/\D/) !== null) return true

    return false
  }
}

module.exports = BowlingScorecard;

// console.log("0".match(/\D/g))

class BowlingScorecard {
  constructor() {
    this.frame = 1
    this.first_roll = null
    this.second_roll = null
  }

  enterRoll(score) {
    if (this._isInvalidScore(score)) return "Invalid score entered, score must be between 0 and 10.";

    this._assignScore(score)

    return score
  }

  generateScorecardInfo() {
    return [{ frame: this.frame, first_roll: this.first_roll, second_roll: this.second_roll }];
  }

  _isInvalidScore(score) {
    if (score > 10 || score < 0) return true
    if (`${score}`.match(/\D/) !== null) return true

    return false
  }

  _assignScore(score) {
    if (this.first_roll === null) {
      this.first_roll = score
    } else {
      this.second_roll = score
    }
  }
}

module.exports = BowlingScorecard;

// console.log("0".match(/\D/g))

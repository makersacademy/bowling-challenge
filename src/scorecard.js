class Scorecard {

  constructor() {
    this.scorecard = new Array(12).fill().map(x => [null, null])
    this.roll = 1
    this.frame = 1
    this.STRIKE_SCORE = 10
  }

  addScore(val) {
    let score = parseInt(val)
    if(this.roll === 1) {
      if(score === this.STRIKE_SCORE) {
        this.scorecard[this.frame - 1] = [this.STRIKE_SCORE]
        this._next_frame()
      } else {
        this._update_scorecard(score)
        this.roll = 2
      }
    } else {
      if((this.scorecard[this.frame - 1][this.roll - 2] + score) > 10) {
        throw new Error("Score for frame is greater than 10")
      }
      this._update_scorecard(score)
      this._next_frame()
    }
  }

  calculateScore() {
    let total = 0
    this.scorecard.slice(0,10).forEach((score, index) => {
      if(this._isStrike(score)) {
        total += this.STRIKE_SCORE + this._strikeBonuses(index)
      } else if(this._isSpare(score)) {
        total += 10 + this.scorecard[index + 1][0]
      } else {
        total += score.reduce((sum, value) => sum + value, 0)
      }
    })
    return total
  }

  isGameOver() {
    if(this.frame < 11 ||
      (this.frame === 11 && (this._isStrike(this.scorecard[9]) || this._isSpare(this.scorecard[9]) && this.scorecard[10][0] === null)) ||
      (this.frame === 12 && this._isStrike(this.scorecard[9]) && this._isStrike(this.scorecard[10]) && this.scorecard[11][0] === null)
      ) {
        return false
      } else { return true }
  }

  _next_frame() {
    this.roll = 1
    this.frame += 1
  }

  _update_scorecard(score) {
    this.scorecard[this.frame - 1][this.roll - 1] = score
  }

  _isStrike(score) {
    return score[0] === 10
  }

  _strikeBonuses(index) {
    if(this._isStrike(this.scorecard[index + 1])) {
      return this.STRIKE_SCORE + this.scorecard[index + 2][0]
    } else {
      return this.scorecard[index + 1].reduce((sum, value) => sum + value, 0)
    }
  }

  _isSpare(score) {
    return score.reduce((sum, value) => sum + value, 0) === 10
  }
}
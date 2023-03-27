const { frameHelpers } = require('./frameHelpers')

class Frame {
  constructor() {
    this.number;
    this.status;
    this.rolls;
    this.bonus = []
    this.score;
  }

  addRolls (...rolls) {
    this.rolls = rolls
    this.status = this.setStatus(rolls)
  }

  addBonus (bonus) {
    const numberOfBonus = this.bonus.length
    const numberMaxOfBonus = this.setNumberMaxOfBonus(this.status)
    const canAcceptBonus = numberOfBonus < numberMaxOfBonus

    if (this.status === 'STRIKE' && canAcceptBonus) this.bonus.push(bonus)
    if (this.status === 'SPARE' && canAcceptBonus) this.bonus.push(bonus)
  }

  totalScore() {
    const bonus = this.isBonusReady(this.status, this.bonus) // return 'X' or '/' if not ready
    const score = this.sum(this.rolls)

    const total = [bonus, score]
    // if bonus ready, the method will return the sum of bonus and score
    // if bonus is not ready, the method will return 'X' or '/'
    this.score = this.isTotalReady(total) ? this.sum(total) : bonus
    return this.score
  }
}

Frame.prototype.setStatus = frameHelpers.setStatus
Frame.prototype.setNumberMaxOfBonus = frameHelpers.setNumberMaxOfBonus
Frame.prototype.isBonusReady = frameHelpers.isBonusReady
Frame.prototype.isTotalReady = frameHelpers.isTotalReady
Frame.prototype.sum = frameHelpers.sum

module.exports = { Frame }

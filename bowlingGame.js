class BowlingGame {
  constructor () {
    this.rolls = []
  }

  getRolls () {
    return this.rolls
  }

  roll (roll) {
    this.rolls += roll
  }

  getScore () {
    let res = 0
    let rollIndex = 0
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = (parseInt(this.rolls[rollIndex]) + parseInt(this.rolls[rollIndex + 1]))
      if (frameScore === 10) {
        res += 10 + parseInt(this.rolls[rollIndex + 2])
      } else {
        res += frameScore
      }
      rollIndex += 2
    }
    return res
  }
}
module.exports = BowlingGame

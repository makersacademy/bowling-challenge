class Frame {
  constructor () {
    this.status = undefined
    this.rolls = undefined
    this.bonus = []
    this.score = 0
  }

  addRolls (...rolls) {
    this.rolls = rolls
    this.#setStatus(rolls)
  }

  addBonus (bonus) {
    const {
      strike,
      spare,
      numberOfBonus,
      numberMaxOfBonus
    } = this.#setNumberMaxOfBonus()

    if (strike && numberOfBonus < numberMaxOfBonus) this.bonus.push(bonus)
    if (spare && numberOfBonus < numberMaxOfBonus) this.bonus.push(bonus)
  }

  #setStatus (rolls) {
    const rollsSum = rolls.reduce((sum, num) => sum + num)
    if (rollsSum !== 10) return

    this.status = rolls.length === 1 ? 'STRIKE' : 'SPARE'
  }

  #setNumberMaxOfBonus () {
    const strike = this.status === 'STRIKE'
    const spare = this.status === 'SPARE'
    const numberOfBonus = this.bonus.length
    let numberMaxOfBonus = 0
    if (strike) numberMaxOfBonus = 2
    if (spare) numberMaxOfBonus = 1
    return { strike, spare, numberOfBonus, numberMaxOfBonus }
  }
}

const frame = new Frame()
frame.addRolls(5, 5)
frame.addBonus(1)

module.exports = { Frame }

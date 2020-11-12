class Roll {
  constructor(rolls) {
    this.rolls = rolls
  }

  strike() {
    console.log(this.rolls[0]);
    if (this.rolls[0] === 10) {
      return true
    } else {
      return false
    }
  }

  spare() {
    let sum = this.rolls.reduce((accumulator, currentValue) => accumulator + currentValue)
    if (sum === 10) {
      return true
    } else {
      return false
    }
  }

  score() {
    let firstTwoRolls = this.rolls.slice(0, 2)
    return firstTwoRolls.reduce((accumulator, currentValue) => accumulator + currentValue)
  }

  first() {
    return this.rolls[0]
  }

  tenth() {
    return this.rolls.reduce((accumulator, currentValue) => accumulator + currentValue)
  }

}

class Frame {
  constructor(rolls) {
    this.rolls = rolls
    this.bonus = 0
  }

  score(){
     let sum = this.rolls.reduce((acc, number) => acc + number)
     return sum + this.bonus
  }

  addBonus(bonus) {
    this.bonus += bonus
  }

  isSpare(){
    return this.rolls.reduce((acc, number) => acc + number) === 10
  }

  isStrike(){
    return this.rolls[0] === 10
  }

}

module.exports = Frame

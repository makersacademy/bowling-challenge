class BowlingGame{
  constructor() {
    this.rolls = []
  } 

  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let result = 0
    let rollIndex = 0

    for  (let i = 0; i < 10; i++) {
      //if spare
      if (this.rolls[rollIndex] + this.rolls[i + 1] == 10) {
      //get spare score  
        result += this.rolls[i] + this.rolls[rollIndex + 1] + this.rolls[ i+2];

      } else {
      //get normal score
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
      }
      rollIndex += 2
    }
    return result;
  }

}

module.exports = BowlingGame
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
      //if strike
      if (this.rolls[rollIndex] == 10 ){
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[ rollIndex+2];
        rollIndex++
      }
      //if spare
      else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      //get spare score  
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[ rollIndex+2];
        rollIndex += 2
      } else {
      //get normal score
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
      rollIndex += 2

      }
    }
    return result;
  }

}

module.exports = BowlingGame
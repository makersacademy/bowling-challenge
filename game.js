class Game {
  constructor() {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    let result = 0;
    let rollIndex = 0;
    for(let frameIndex=0; frameIndex<10; frameIndex++){
      if (this.rolls[rollIndex] === 10) {
        result += 10 + this.rolls[rollIndex + 1]+ this.rolls[rollIndex + 2];
        rollIndex += 1;
      }
      else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        result += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else{
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }
    return result;
  }



}

module.exports = Game;

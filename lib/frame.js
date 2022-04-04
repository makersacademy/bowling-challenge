class Frame {
  constructor () {
    this.rolls = []
    this.score = 0
  }

  feedRoll(number) {
    this.rolls.push(number);
  }

  calculateScore() {

    if (this.rolls.length < 2) {
      this.score = 0;
    } else if (this.rolls.length === 2) {
      if (this.rolls[0] + this.rolls[1]  < 10) {
        this.score = this.rolls[0] + this.rolls[1];
      } else if (this.rolls[0] + this.rolls[1]  === 10) {
        this.score = 0;
      }
    } else if (this.rolls[0] + this.rolls[1]  >= 10){
      this.score = this.rolls[0] + this.rolls[1] + this.rolls[2];
    } else {
      this.score = this.rolls[0] + this.rolls[1];
    }
    return this.score;
  }
}

module.exports = Frame;
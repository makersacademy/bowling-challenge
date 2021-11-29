class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(roll) {
    this.rolls.push(roll);
  }

  score() {
    let count = 0;
    let score = 0;

    for (let i = 0; i < 10; i++) {
      if (this.isStrike(count)) {
        score += this.strikeScore(count);
        count += 1;
      } else if (this.isSpare(count)) {
        score += this.spareScore(count);
        count += 2;
      } else {
        score += this.frameScore(count);
        count += 2;
      }
    }
    return score;
  }

  isStrike(count) {
    return this.rolls[count] == 10;
  }

  strikeScore(count) {
    return this.rolls[count + 1] + this.rolls[count + 2] + 10;
  }

  isSpare(count) {
    return this.rolls[count] + this.rolls[count + 1] == 10;
  }

  spareScore(count) {
    return this.rolls[count + 2] + 10;
  }

  frameScore(count) {
    return this.rolls[count] + this.rolls[count + 1];
  }
}

module.exports = Bowling;

class FrameList {
  constructor() {
    this.rolls = [];
    this.rollCounter = 0;
    this.score = [];
  }

  roll(pins) {
    this.rolls.push(pins);
    this.rollCounter++;
  }

  calc() {
    this.score = [];
    let count = 0;
    let spare = false;

    this.rolls.map((roll) => {
      if (roll == 10) {
        this.score.push(10 + this.rolls[count + 1] + this.rolls[count + 2]);
        count++;
      } else if (roll + this.rolls[count + 1] == 10) {
        spare = true;
        this.score.push(10 + this.rolls[count + 2]);
        count++;
      } else if (spare == true) {
        spare = false;
        count++;
      } else {
        this.score.push(roll);
        count++;
      }
    });
  }

  total() {
    return this.score.reduce((a, b) => a + b, 0);
  }
}

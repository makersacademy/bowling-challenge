// this handles the rolls and adding them to each frame, it only knows about the one frame
class Frame {
  constructor() {
    this.roll1 = 0;
    this.roll2 = 0;
    this.rollCount = 1;
    this.mark = 'none';
    this.bonus1 = [0];
    this.bonus2 = [0];
  }

  addRoll(roll) {
    if (this.rollCount === 1) {
      this.roll1 = roll;
      this.rollCount += 1;
    } else {
      this.roll2 = roll;
      this.rollCount -= 1;
    }
    this.isMark();
  }

  addBonus1(roll) {
    this.bonus1.push(roll);
  }

  addBonus2(roll) {
    this.bonus2.push(roll);
  }

  score() {
    const b1Sum = this.bonus1.reduce((a, b) => a + b, 0);
    const b2Sum = this.bonus2.reduce((a, b) => a + b, 0);
    return this.roll1 + this.roll2 + b1Sum + b2Sum;
  }

  isMark() {
    if (this.roll1 === 10) {
      this.mark = 'strike';
    } else if (this.roll1 + this.roll2 === 10) {
      this.mark = 'spare';
    }
  }
}

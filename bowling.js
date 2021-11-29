class Bowling {
  constructor() {
    this.frame = 0;
    this.totalScore = 0;
    this.frames = [];
    this.roll = 1;
  }

  getTotalScore() {
    return this.totalScore;
  }

  addFrame(total, roll) {
    return total + roll;
  }

  addRoll(pins) {
    if (this.roll === 1) {
      this.frames.push([pins])
      this.roll = 2;
    } else if (this.roll === 2) {
      this.frames[this.frame].push(pins)
      this.roll = 1;
      this.totalScore += this.frames[this.frame].reduce(this.addFrame);
      this.frame += 1;
    }
  }

}

module.exports = Bowling;
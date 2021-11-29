class Bowling {
  constructor() {
    this.frame = 0;
    this.totalScore = 0;
    this.frames = [];
    this.scoreFrames = [];
    this.roll = 1;
  }

  getTotalScore() {
    return this.totalScore;
  }

  addFrame(total, roll) {
    return total + roll;
  }

  isSpare() {
    if(this.frame != 0) {
      if ((this.frames[this.frame - 1].reduce(this.addFrame)) === 10) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  addToScore(frameScore) {
    this.totalScore += frameScore;
  }

  addRoll(pins) {
    if (this.roll === 1) {
      this.frames.push([pins]);
      if (this.isSpare()) {
        this.scoreFrames.push([pins * 2]);
      } else {
        this.scoreFrames.push([pins]);
      }
      this.roll = 2;
    } else if (this.roll === 2) {
      this.frames[this.frame].push(pins);
      this.scoreFrames[this.frame].push(pins);
      this.roll = 1;
      this.addToScore(this.scoreFrames[this.frame].reduce(this.addFrame));
      this.frame += 1;
    }
  }

}

module.exports = Bowling;
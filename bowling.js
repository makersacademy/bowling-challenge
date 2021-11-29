class Bowling {
  constructor() {
    this.frame = 0;
    this.totalScore = 0;
    this.frames = [];
    this.scoreFrames = [];
    this.roll = 1;
    this.isStrike = false;
  }

  getTotalScore() {
    return this.totalScore;
  }

  addFrame(total, roll) {
    return total + roll;
  }

  isSpare(pins) {
    if(this.frame != 0) {
      if ((this.frames[this.frame - 1].reduce(this.addFrame)) === 10) {
        return pins * 2;
      } else {
        return pins;
      }
    } else {
      return pins;
    }
  }

  addToScore(frameScore) {
    this.totalScore += frameScore;
  }

  setIsStrike(pins) {
    if (pins === 10) {
      this.isStrike = true;
      this.addToScore(this.scoreFrames[this.frame].reduce(this.addFrame));
      this.frame += 1;
      this.roll = 1;
    } else {
      false;
      this.roll = 2;
    }
  }

  Roll(pins) {
    if (this.isStrike) {
      this.addStrikeRoll(pins);
    } else {
      this.addRoll(pins);
    }
  }

  addRoll(pins) {
    if (this.roll === 1) {
      this.frames.push([pins]);
      this.scoreFrames.push([this.isSpare(pins)]);
      this.setIsStrike(pins);
    } else if (this.roll === 2) {
      this.frames[this.frame].push(pins);
      this.scoreFrames[this.frame].push(pins);
      this.roll = 1;
      this.addToScore(this.scoreFrames[this.frame].reduce(this.addFrame));
      this.frame += 1;
    }
  }

  addStrikeRoll(pins) {
    if (this.roll === 1) {
      this.totalScore += 10;
      this.frames.push([pins]);
      this.scoreFrames.push([pins + 2]);
      this.setIsStrike(pins);
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
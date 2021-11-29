class Bowling {
  constructor() {
    this.frame = 0;
    this.totalScore = 0;
    this.frames = [];
    this.scoreFrames = [];
    this.roll = 1;
    this.isStrike = false;
  }

  getFrame() {
    return this.frame;
  }

  getRoll() {
    return this.roll;
  }

  getTotalScore() {
    return this.totalScore;
  }

  addFrame(total, roll) {
    return total + roll;
  }

  isSpare(pins) {
    if(this.frame != 0) {
      if ((this.frames[this.frame - 1].reduce(this.addFrame) === 10) && (this.frames[this.frame -1].length > 1)) {
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
    if (this.frame <= 9) {
      if (this.isStrike) {
        this.addStrikeRoll(pins);
      } else {
        this.addRoll(pins);
      }
    } else {
      if (this.getTotalScore() === 0) {
        return "Gutter Game";
      } else if (this.getTotalScore() === 300) {
        return "Perfect game";
      } else {
        return `Game over, you scored ${this.getTotalScore()}.`;
      }
      
    }

  }

  additionalRoll() {
    if ((this.frame === 9) && (this.roll === 2) && (this.frames[this.frame].reduce(this.addFrame) === 10)) {
      return true;
    } else {
      return false;
    }
    
  }

  addRoll(pins) {
    if (this.roll === 1) {
      this.frames.push([pins]);
      this.scoreFrames.push([this.isSpare(pins)]);
      this.setIsStrike(pins);
    } else {
      this.frames[this.frame].push(pins);
      this.scoreFrames[this.frame].push(pins);
      if (!this.additionalRoll()) {
        this.roll = 1;
        this.addToScore(this.scoreFrames[this.frame].reduce(this.addFrame));
        this.frame += 1;
      } else {
        this.roll = 3;
      }

    }
  }

  addStrikeRoll(pins) {
    if (this.roll === 1) {
      this.totalScore += 10;
      this.frames.push([pins]);
      this.scoreFrames.push([pins + 2]);
      this.setIsStrike(pins);
    } else {
      this.frames[this.frame].push(pins);
      this.scoreFrames[this.frame].push(pins);
      this.roll = 1;
      this.addToScore(this.scoreFrames[this.frame].reduce(this.addFrame));
      this.frame += 1;
    }
  }

}

module.exports = Bowling;
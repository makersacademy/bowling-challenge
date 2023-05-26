class Scorecard {
  constructor() {
    this.frames = [];
    this.basicScore = 0;
    this.strikeBonusScore = 0;
    this.spareBonusScore = 0;
  }

  addFrame(roll1, roll2, roll3) {
    return this.frames.push([roll1, roll2, roll3]);
  }

  calculateBasicScore() {
    this.frames.map((frame) => {
      const frameBasicScore = frame[0] + frame[1] + frame[2];
      this.basicScore += frameBasicScore;
    });
  }

  calculateStrikeBonuses() {
    for (let i = 0; i < this.frames.length - 1; i++) {
      const currentArray = this.frames[i];
      const nextArray = this.frames[i + 1];
      if (currentArray[0] === 10) {
          const sum = nextArray[0] + nextArray[1];
          this.strikeBonusScore += sum;
      }
    }
  }

  calculateSpareBonuses() {
    for (let i = 0; i < this.frames.length - 1; i++) {
      const currentArray = this.frames[i];
      const nextArray = this.frames[i + 1];
      if ((currentArray[0] + currentArray[1] === 10) && (currentArray[0] !== 10)) {
        this.spareBonusScore += nextArray[0];
      }
    }
  }

  checkPerfectGame() {
    const areAllStrikes = this.frames.every((subArray) => {
      return subArray[0] === 10;
    });
    return areAllStrikes;
  }

  getTotalScore() {
    if (this.checkPerfectGame() && this.frames.length === 12) {
      return 300;
    } else {
      return this.basicScore + this.strikeBonusScore + this.spareBonusScore;
    }
  }
  
  getFrames() {
    return this.frames;
  }
};

module.exports = Scorecard;

class Scorecard {
  constructor() {
    this.frames = [];
    this.basicScore = 0;
    this.strikeBonusScore = 0;
  }

  addFrame(roll1, roll2) {
    return this.frames.push([roll1, roll2]);
  }

  calculateBasicScore() {
    this.frames.map((frame) => {
      const frameBasicScore = frame[0] + frame[1];
      this.basicScore += frameBasicScore;
    });
  }

  calculateStrikeBonuses() {
    for (let i = 0; i < this.frames.length - 1; i++) {
      const currentArray = this.frames[i];
      const nextArray = this.frames[i + 1];
      if (currentArray[0] === 10) {
          const sum = nextArray.reduce((accumulator, element) => accumulator + element, 0);
          this.strikeBonusScore += sum;
      }
    }
  }

  getTotalScore() {
    return this.basicScore + this.strikeBonusScore;
  }
  
  getFrames() {
    return this.frames;
  }
};

module.exports = Scorecard;

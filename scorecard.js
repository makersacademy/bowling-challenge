class Scorecard {
  constructor() {
    this.frames = [];
    this.basicScore = 0;
    this.strikeBonusScore = 0;
    this.spareBonusScore = 0;
  }

  addFrame(roll1, roll2, roll3) { // it pushes each frame in the array
    return this.frames.push([roll1, roll2, roll3]);
  }

  calculateBasicScore() { // it calculates the basic score
    this.frames.map((frame) => {
      const frameBasicScore = frame[0] + frame[1] + frame[2];
      this.basicScore += frameBasicScore;
    });
  }

  calculateStrikeBonuses() { // it adds the score of the next frame to the strikeBonusScore
    for (let i = 0; i < this.frames.length - 1; i++) {
      const currentArray = this.frames[i];
      const nextArray = this.frames[i + 1];
      if (currentArray[0] === 10) {
          const sum = nextArray[0] + nextArray[1];
          this.strikeBonusScore += sum;
      }
    }
  }

  calculateSpareBonuses() { // it adds the score of the first roll of the next frame to the spareBonusScore
    for (let i = 0; i < this.frames.length - 1; i++) {
      const currentArray = this.frames[i];
      const nextArray = this.frames[i + 1];
      if ((currentArray[0] + currentArray[1] === 10) && (currentArray[0] !== 10)) {
        this.spareBonusScore += nextArray[0];
      }
    }
  }

  checkPerfectGame() { // it checks if all the first elements in the arrays are 10
    const areAllStrikes = this.frames.every((subArray) => {
      return subArray[0] === 10;
    });
    return areAllStrikes;
  }

  getTotalScore() { // it returns 300 if the frames are 12 and areAllStrikes is true
    return (this.checkPerfectGame() && this.frames.length === 12) ? 
      300 : this.basicScore + this.strikeBonusScore + this.spareBonusScore;
  }
  
  getFrames() { // it returns the frames array just for checking
    return this.frames;
  }
};

module.exports = Scorecard;

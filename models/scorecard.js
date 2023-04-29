class Scorecard {
  constructor() {
    this.frames = [];
    this.totalScore = 0;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  calculateScore() {
    const framePointsArray = this.frames.map(frame => frame.framePoints()).flat();
    this.totalScore = framePointsArray.reduce((total, current) => {
      return total += current;
    }, 0);
    this.frames.forEach((frame, index) => {
      if (frame.strike() || frame.spare()) {
        index < 8 ? this.strikeOrSpare(frame, index): null;
    }})
    if (this.frames[8].framePoints()[0] === 10) {
      this.ninthFrameStrikeBonus()
    }
    return this.totalScore;
  }

  ninthFrameStrikeBonus() {
    this.totalScore += this.frames[9].framePoints()[0]
    this.totalScore += this.frames[9].framePoints()[1]
  }

  // NB: Be aware that ligtening is basically frame and also never strikes TWICE!
  strikeOrSpare(lightening, index) {
    // console.log(`frame ${index + 1}: ${round.framePoints()[0]}`)
    this.totalScore += this.frames[index+1].framePoints()[0];
    if (lightening.strike)
      if ((this.frames[index+1].framePoints()[0]) === 10) {
        this.totalScore += this.frames[index+2].framePoints()[0];
      } else {
        this.totalScore += this.frames[index+1].framePoints()[1];
      }
  }
}

module.exports = Scorecard;


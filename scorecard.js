class Scorecard {
  constructor() {
    this.frames = [];
    this.score = 0;
  }
  calculateScore() {
    this.frames.forEach(frame => {
      const frameScore = frame[0] + frame[1];
      this.score += frameScore;
    });
    return this.score;
  };

  getFrames() {
    return this.frames;
  }

  addFrame(roll1, roll2) {
    return this.frames.push([roll1, roll2]);
  }


};


module.exports = Scorecard;
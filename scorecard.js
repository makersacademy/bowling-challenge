class Scorecard {
  constructor() {
    this.frames = [];
  }
  calculateScore() {
    return 0;
  };

  getFrames() {
    return this.frames;
  }

  addFrame(roll1, roll2) {
    return this.frames.push([roll1, roll2]);
  }


};


module.exports = Scorecard;
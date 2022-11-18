class Bowling {
  constructor() {
    this.frames = [];
    this.currentframe = [];
    this.score = 0;
    this.spare = false;
    this.strike = false;
  }
  resetCurrentFrame() {
    this.currentframe = [];
  }

  add(frame) {
    this.frames.push(frame);
    this.currentframe.push(frame);
  }

  checkSpare() {
    // current frame
    let result = this.currentframe.map((frame) => frame.spare === true);
    this.spare = result;
    //console.log(this.spare);
  }

  perfectGame() {}

  sum() {
    this.currentframe.map((frame) => (this.score += frame.framescore));
  }

  totalScore() {
    return this.score;
  }
}

module.exports = Bowling;

const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.scorecardArr = [];
    // this.frameNumber = 0;
  }

  addRoll(roll) {
    let frame = this.scorecardArr.pop();
    if (!frame) {
      frame = new Frame();
    }
    if (frame.isComplete()) {
      this.scorecardArr.push(frame);
      frame = new Frame();
    }
    frame.addRolls(roll);
    this.scorecardArr.push(frame);
  }

  totalScore() {
    let sum = 0;
    this.scorecardArr.map((frame) => (sum += frame.sumRolls()));
    return sum;
  }
}

module.exports = Scorecard;

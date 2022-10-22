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
    this.scorecardArr.map((frame, frameNumber) => {
      const nextFrame = this.scorecardArr[frameNumber + 1];
      const nextNextFrame = this.scorecardArr[frameNumber + 2];
      if (frame.isStrike()) {
        if (nextFrame.isStrike()) {
          sum += frame.sumRolls() + nextFrame.sumRolls() + nextNextFrame.firstRoll()
          return
        } else {
          sum += frame.sumRolls() + nextFrame.sumRolls()
          return
        }
      }
      if (frame.isSpare()) {
        sum += frame.sumRolls() + nextFrame.firstRoll();
        return;
      }
      sum += frame.sumRolls();
    });
    return sum;
  }
}

module.exports = Scorecard;

// switch (currentFrame) {
//   case currentFrame.isStrike():
//     sum += currentFrame.sumRolls() + nextFrame.sumRolls()
//   case default:
//     sum += currentFrame.sumRolls()

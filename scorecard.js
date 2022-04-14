const Frame = require("./frame");

class Scorecard {
  constructor() {
    this.frames = [];
  }

  inputFrame(rolls) {
    //rolls will be e.g. [2,3]
    const frame = new Frame(rolls); // would it be better to inject this in? If I inject it, would I then need to use a double in the tests?
    this.frames.push(frame);
  }
  currentFrameNumber() {
    return this.frames.length + 1;
  }
  score() {
    return this.frames.reduce((runningScore, currentFrame, index, frames) => {
      const currentFrameScore = currentFrame.score(
        //in a reducer, you already have the runningScore, so all you need to do is calculdate the currentFrameScore
        frames[index + 1],
        frames[index + 2]
      );
      return runningScore + currentFrameScore;
    }, 0);
  }
}
module.exports = Scorecard;

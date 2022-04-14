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
    //not strictly necessary to pass in the frames array as an argument, but it makes it cleaner than having 'this.frames[index + 1] in the function
    scoreAllFrames = this.frames.reduce(
      (runningScore, currentFrame, index, frames) => {
        //in a reducer, you already have the runningScore, so all you need to do is calculdate the currentFrameScore

        const currentFrameScore = currentFrame.score(
          frames[index + 1],
          frames[index + 2]
        );
        return runningScore + currentFrameScore;
      },
      0
    );
    return scoreAllFrames;
  }
}
module.exports = Scorecard;

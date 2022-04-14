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
    let total = 0;
    this.frames.map((frame, index, frames) => {
      total += frame.score(frames[index + 1], frames[index + 2]);
    });
    return total;
  }
}
module.exports = Scorecard;

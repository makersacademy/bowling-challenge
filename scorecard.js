const Frame = require("./frame");

class Scorecard {
  constructor() {}

  playRound(roll1, roll2) {
    const frame = new Frame();
    frame.setRoll1(roll1);
    frame.setRoll2(roll2);
    frame.addToTotal(frame.getRoll1() + frame.getRoll2());
    return frame;
  }
}

module.exports = Scorecard;

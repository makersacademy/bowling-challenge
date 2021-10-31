const Frame = require("../src/frame");

class Game {
  constructor() {
    this.frames = [];
  }

  roll(firstPins, secondPins) {
    this._rollParams(firstPins, secondPins);
    this._createFrame();
    this.frames[-1].first_roll(firstPins);
    this.frames[-1].second_roll(secondPins);
  }

  _createFrame() {
    this.frames.push(new Frame());
  }

  _isStrike(frame) {
    if (frame.first_roll === 10 && frame.second_roll === null) {
      return true;
    }
  }

  _isSpare(frame) {
    if (frame.score === 10 && frame.second_roll !== null) {
      return true;
    }
  }

  _rollParams(firstPins, secondPins) {
    var pins = firstPins + secondPins;
    if (!Number.isInteger(firstPins)) {
      throw Error("Please enter a number!");
    } else if (pins < 0) {
      throw Error("You cannot throw a negative roll!");
    } else if (pins > 10) {
      throw Error("There are only 10 pins!");
    }
  }
}

module.exports = Game;

const Rules = require('../lib/rules.js');

class Scorecard {
  constructor(RulesClass = Rules) {
    this.framesArray = [];
    this._frame = [];
    this.rulesClassInstance = new RulesClass();
  }

  addRoll = (roll) => {
    this._frame.push(roll);
    this.addToFramesArray();
  };

  addToFramesArray = () => {
    if (this.framesArray.length < this.rulesClassInstance.maxFrames - 1) {
      if (this.rulesClassInstance.isStrike(this._frame) || this._frame.length === 2) {
        this.#pushFrameAndReset();
      }
    } else if (this.framesArray.length === this.rulesClassInstance.maxFrames - 1) {
      if (!this.rulesClassInstance.isStrike(this._frame) && !this.rulesClassInstance.isSpare(this._frame) && this._frame.length === 2) {
        this.#pushFrameAndReset();
      } else if (this._frame.length === 3) {
        this.#pushFrameAndReset();
      }
    }
  };

  #pushFrameAndReset = () => {
    this.framesArray.push(this._frame);
    this._frame = [];
  };
}

module.exports = Scorecard;

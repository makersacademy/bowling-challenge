const Frame = require("./frame");
const finalFrame = require("./final_frame");

class Game {
  constructor() {
    this.frames = [];
  }

  roll(one, two) {
    this._rollParams(one, two);
    this._newFrame(one, two);
    if (this.frames.length > 3) {
      this._bonusScan();
    }
  }

  finalRoll(one, two) {
    var final = new finalFrame();
    final.firstRoll(one)
    final.secondRoll(one);
    this.frames.push(final)
  }

  bonusRoll(final){
    this.frames.at(-1).finalRoll(final)
  }

  fetchScore() {
    var score = 0;
    this.frames.map((x) => (score += x.score));
    return score;
  }

  _newFrame(one, two) {
    var frame = new Frame();
    frame.firstRoll(one);
    frame.secondRoll(two);
    this.frames.push(frame);
  }

  _isStrike(frame) {
    if (frame.first_roll === 10 && frame.second_roll === "x") {
      return true;
    }
  }

  _strikeBonus(frame) {
    if (!this._isStrike(this.frames.at(-2))) {
      this.frames.at(-3).score +=
        this.frames.at(-2).score;
    } else {
      this.frames.at(-3).score +=
        10 + this.frames.at(-1).first_roll;
    }
  }

  _isSpare(frame) {
    if (frame.score === 10 && frame.second_roll !== "x") {
      return true;
    }
  }

  _spareBonus(frame) {
    this.frames.at(-3).score +=
      this.frames.at(-2).first_roll;
  }

  _bonusScan() {
    if (this._isStrike(this.frames.at(-3))) {
      this._strikeBonus(this.frames.at(-3));
    } else if (this._isSpare(this.frames.at(-3))) {
      this._spareBonus(this.frames.at(-3));
    }
  }

  _rollParams(one, two) {
    var pins = one + two;
    if (!Number.isInteger(one)) {
      throw Error("Please enter a number!");
    } else if (pins < 0) {
      throw Error("You cannot throw a negative roll!");
    } else if (pins > 10) {
      throw Error("There are only 10 pins!");
    }
  }
}

module.exports = Game;

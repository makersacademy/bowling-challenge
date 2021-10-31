const Frame = require("./frame");

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

  fetchScore() {
    var score = 0;
    this.frames.map (x => score += x.score )
    return score;
  }

  _newFrame(one, two) {
    var frame = new Frame();
    frame.firstRoll(one);
    frame.secondRoll(two);
    this.frames.push(frame);
  }

  _isStrike(frame) {
    if (frame.first_roll === 10 && frame.second_roll === 'x') {
      return true;
    }
  }

  _strikeBonus(frame) {
    if (!this._isStrike(this.frames[this.frames.length - 2])) {
      this.frames[this.frames.length - 3].score +=
      this.frames[this.frames.length - 2].score;
    } else {
      this.frames[this.frames.length - 3].score +=
        10 + this.frames[this.frames.length - 1].first_roll;
    }
  }

  _isSpare(frame) {
    if (frame.score === 10 && frame.second_roll !== 'x') {
      return true;
    }
  }

  _spareBonus(frame) {
    this.frames[this.frames.length - 3].score +=
      this.frames[this.frames.length - 2].first_roll;
  }

  _bonusScan() {
    if (this._isStrike(this.frames[this.frames.length - 3])) {
      this._strikeBonus(this.frames[this.frames.length - 3]);
    } else if (this._isSpare(this.frames[this.frames.length - 3])) {
      this._spareBonus(this.frames[this.frames.length - 3]);
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

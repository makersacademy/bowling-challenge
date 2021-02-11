"use strict";

class Frame {
  constructor(frame10 = false) {
    this._rolls = [];
    this._score = 0;
    this._inPlay = true;
    this._frame10 = frame10;
  }

  rolls() {
    return this._rolls;
  }

  score() {
    return this._score;
  }

  isInPlay() {
    return this._inPlay;
  }

  isFrame10() {
    return this._frame10;
  }

  isStrike() {
    return this._rolls[0] === 10;
  }

  isSpare() {
    return this._rolls.reduce((a, b) => a + b, 0) === 10 && !this.isStrike();
  }

  knocked(pins) {
    this._validRoll(pins);
    this._rolls.push(pins);
    this._score += pins;
    this._frameCheck();
    this._strikeCheck();
  }

  pointBonus(pins) {
    this._score += pins;
  }

  _closePlay() {
    this._inPlay = !this._inPlay;
  }

  _frameCheck() {
    if (this._rolls.length === 2) {
      if (!this.isFrame10()) {
        this._closePlay();
      } else if (!this.isStrike() && !this.isSpare()) {
        this._closePlay();
      }
    } else if (this._rolls.length === 3) {
      this._closePlay();
    }
  }

  _strikeCheck() {
    if (this._rolls[0] === 10 && !this._frame10) {
      this._closePlay();
    }
  }

  _validRoll(pins) {
    if (pins > 10 || pins < 0) {
      throw Error("Illegal move!");
    } else if (!this.isFrame10() && this._rolls[0] + pins > 10) {
      throw Error("Illegal move!");
    } else {
      return;
    }
  }
}

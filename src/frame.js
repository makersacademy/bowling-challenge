"uses strict";

const STRIKE = 10;
const SPARE = 10;

class Frame {
  constructor() {
    this._rollOne = null;
    this._rollTwo = null;
    this._rollThree = null;
    this._score = 0;
  }

  update(score) {
    if(this._rollOne === null) {
      this._rollOne = score;
    }
    else if(this._rollTwo === null && !this.isStrike()) {
      if((this._rollOne + score) > MAX_SCORE) {
        this.errorMessage();
      }
      this._rollTwo = score;
    }
    this._score += score;
  }

  isFinished() {
    if(this._rollTwo !== null || this.isStrike()) {
      return true
    }
    return false
  }

  isStrike() {
    if(this._rollOne === STRIKE) {
      this._rollTwo = 'X'
      return true;
    }
    return false;
  }

  isSpare() {
    if(this._rollOne !== STRIKE && (this._rollOne + this._rollTwo) === SPARE ) {
      this._rollTwo = '/'
      return true;
    }
    return false;
  }

  isSpareOrStrike() {
    if(this.isStrike() || this.isSpare()) {
      return true;
    }
    return false;
  }

  rollsAndScore() {
    return [this._rollOne, this._rollTwo, this._rollThree, this._score];
  }

  errorMessage() {
    alert("There weren't that many pins standing!");
    throw new Error("There weren't that many pins!");
  }
}
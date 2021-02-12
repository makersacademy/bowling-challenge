"uses strict";

const STRIKE = 10;
const SPARE = 10;

class Frame {
  constructor() {
    this._rollOne = null;
    this._rollTwo = null;
    this._score = 0;
  }

  update(score) {
    if(this._rollOne === null) {
      this._rollOne = score;
    }
    else if(this._rollTwo === null) {
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
      return true;
    }
    return false;
  }

  isSpare() {
    if(this._rollOne !== STRIKE && (this._rollOne + this._rollTwo) === SPARE ) {
      return true;
    }
    return false;
  }

  // isSpareOrStrike() {
  //   if(this.isStrike() || this.isSpare()) {
  //     return true;
  //   }
  //   return false;
  // }

}
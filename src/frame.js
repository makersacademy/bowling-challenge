"uses strict";

const STRIKE = 10;

class Frame {
  constructor() {
    this._rollOne = null;
    this._rollTwo = null;
  }

  update(score) {
    if(this._rollOne === null) {
      this._rollOne = score;
    }
    else {
      this._rollTwo = score;
    }
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

}
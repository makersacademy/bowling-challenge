"uses strict";

class FrameTen extends Frame{
  constructor() {
    super();
  }

  isFinished() {
    if(this._rollThree !== null || (this._rollTwo !== null && !this.isSpareOrStrike())) {
      return true;
    }
    return false
  }

  update(score) {
    if(this._rollOne === null) {
      this._rollOne = score;
    }
    else if(this._rollTwo === null) {
      this._rollTwo = score;
    }
    else if(this._rollThree === null) {
      this._rollThree = score;
    }
    this._score += score;
  }

  isStrike() {
    if(this._rollOne === STRIKE) {
      return true;
    }
    return false;
  }

}
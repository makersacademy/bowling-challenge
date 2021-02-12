"uses strict";

class Frame {
  constructor() {
    this._rollOne = null;
    this._rollTwo = null;
  }

  update(score) {
    this._rollOne = score;
  }
  
}
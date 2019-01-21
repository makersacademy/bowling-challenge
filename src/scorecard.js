class ScoreCard {

  constructor() {
    this._rolls = [];
    this._ended = false;
    this._score = 0;
    this._frame = 0;
  }

  isComplete() {
    if (this._frame < 20) {
      return false;
    } else {
      return true;
    }
  }
  
  roll(score) {
    this._frame ++;
    this._rolls.push(score);
  }

}

class Frame {
  constructor () {
    this._rolls = [];
    this._bonus_score = 0;
  }

  // first two methods are input methods
  addRoll(score) {
    this._rolls.push(score);
  }
  
  addBonusScore(bonus) {
    this._bonus_score += bonus;
  }

  calcFrameTotal() {
    return this._rolls.reduce((a, b) => a + b, 0) + this._bonus_score;
  }

  isSpare() {
    return (this._rolls[0] + this._rolls[1] === 10);
  }

  isStrike() {
    return (this._rolls[0] === 10);
  }

  isFrameComplete() {
    if (this.isStrike() && this._rolls.length === 1) { return true; }
    if (this._rolls.length === 2 ) {return true;}
    return false;
  }

  isFinalFrameComplete() {
    if (this._rolls.length === 2 && this.calcFrameTotal() < 10) {return true;}
    if (this._rolls.length === 3) {return true;}
    return false;
  }

  calcFrameTotalForFirstTwoRolls() {
    return this._rolls.slice(0, 2).reduce((a, b) => a + b, 0);
  }

  firstRollValue() {
    return this._rolls[0];
  }
}
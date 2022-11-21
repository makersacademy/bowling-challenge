class Frame {
  constructor() {
    this.frame_result = [];
    this.bonus = 0;
    this.rolls = 0;
  };
  
  getFrameResult() {
    return this.frame_result;
  };

  makeRoll(score) {
    this.frame_result.push(score);
    this.rolls += 1;
  };

  getFrameRolls() {
    return this.rolls;
  }


  getFrameBonus() {
    return this.bonus;
  };

  setFrameBonus(bonus) {
    this.bonus += bonus;
  };

  getFrameScore() {
    if (this.frame_result.length == 0) {
      return this.bonus;
    } else {
      let result = this.frame_result.reduce((sum, elem) => sum + elem);
      return result + this.bonus;
    };
  };
};

module.exports = Frame;
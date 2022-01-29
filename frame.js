class Frame {
  constructor(rolls) { //constructed with rolls e.g. new Frame([3,3])
    this.rolls = rolls 
  }

  _isStrike() {
    return this.rolls[0] == 10; 
  }
  _isSpare() {
    return this.rolls[0] + this.rolls[1] == 10;
  }

  score(next_frame, next_next_frame) {
    const roll_score = this.rolls.reduce((value, roll) => {
      return value + roll;
    }, 0);
    return roll_score + this.bonus(next_frame, next_next_frame)
  }

  _bonus(next_frame, next_next_frame) { //frame class does not need to know what next_frame and next_next_frame are, because these params will be passed in when scorecard methods are called

    if (this._isStrike()) {
      return next_frame._sumFrame() + next_next_frame._sumFrame();
    }
    else if (this._isSpare()) {
      return next_frame._sumFrame();
    }
    else {
      return 0
    }
  }
  _sumFrame() {
    const sum_rolls = (accum, roll) => accum + roll;
    return this.rolls.reduce(sum_rolls);
  }
} 
module.exports = Frame
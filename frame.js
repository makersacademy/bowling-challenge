class Frame {
  constructor(rolls) { //constructed with rolls e.g. new Frame([3,3])
    this.rolls = rolls 
  }

  _isStrike() {
    return this.rolls[0] == 10; 
  }
  _isSpare() {
    return this._sumFrame() == 10;
  }
  _isFinalFrame(next_frame, next_next_frame) {
    return next_frame == undefined && next_next_frame == undefined;
  }
  score(next_frame, next_next_frame) {
    console.log(this._isFinalFrame(next_frame, next_next_frame))
    if (this._isFinalFrame(next_frame, next_next_frame)) { 
      console.log(this._sumFrame());
        return this._sumFrame();
    }
    else {
      return this._sumFrame() + this._bonus(next_frame, next_next_frame);
    }
  }

  _bonus(next_frame, next_next_frame) { //frame class does not need to know what next_frame and next_next_frame are, because these params will be passed in when scorecard methods are called
    if (this._isStrike() && next_frame._isStrike()) {
      if (next_next_frame == undefined) {
        console.log('should only print in 9th frame strike' + next_frame.rolls[1]);
        return 10 + next_frame.rolls[1];
        } // i.e. 9th frame
      else {
        return 10 + next_next_frame.rolls[0];
      }
    }
    else if (this._isStrike()) {
      return next_frame.rolls[0] + next_frame.rolls[1]; // can't use sumFrame here because in 10th frame, we don't want to sum all three for the 9th frame's bonus
    }
    else if (this._isSpare()) {
      return next_frame.rolls[0];
    }
    else {
      return 0;
    }
  }
  _sumFrame() {
    const sum_rolls = (accum, roll) => accum + roll;
    return this.rolls.reduce(sum_rolls);
  }
} 
module.exports = Frame;
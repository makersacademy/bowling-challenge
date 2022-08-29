const frame = require('./frame');

class Score {
  constructor() {
    this.frames = [];
  };
  
  add(frame) {
    this.frames.push(frame);
  };

  forFrame(number) {
    if (this.frames[number - 1].isStrike()) {
      if (this.frames[number].isStrike()) {
        return 20 + this.frames[number + 1].roll_1
      }
      return 10 + this.frames[number].getSum();

    } else if (this.frames[number - 1].isSpare()) {
      return 10 + this.frames[number].roll_1

    } else {
      return this.frames[number - 1].getSum();
    };
  };

  // total() {

  // };
};

module.exports = Score;
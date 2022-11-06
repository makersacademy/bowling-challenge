const Frame = require('./frame');

class LastFrame extends Frame {
  constructor() {
    super();
    this.thirdRoll = 0;
    this.secondStrike = false;

  }

  setSecondRoll(secondRoll) {
    this.secondRoll = secondRoll;
    if (this.firstRoll === 10 && secondRoll === 10) {
      this.secondStrike = true;
    } else if (this.firstRoll + secondRoll === 10) {
      this.spare = true;
    }
  }

  setThirdRoll(number) {
    this.thirdRoll = number;
  }

  getThirdRoll() {
    return this.thirdRoll;
  }

  isSecondStrike() {
    return this.secondStrike;
  }
}

module.exports = LastFrame;

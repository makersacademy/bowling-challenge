class Game {
  constructor() {
    this.frame = 1;
    this.roll = 1;
    this.pinsRolled = [[], [], [], [], [], [], [], [], [], []];
    this.continue = true;
    this.score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  };

  getRoll() {
    return this.roll;
  };

  getFrame() {
    return this.frame;
  };

  getPinsRolled() {
    return this.pinsRolled;
  };

  getContinue() {
    return this.continue;
  };

  checkIfConotinue() {
    if (this.frame === 10 && this.roll === 2 && this.pinsRolled[9].reduce((partialSum, now) => partialSum + now) < 10) {
      this.continue = false;
    };
    if (this.frame === 10 && this.roll === 3) {
      this.continue = false;
    }
  }

  rollPin(pinNum) {
    this.pinsRolled[this.frame - 1].push(pinNum);
    // writeToScoreboard starts
    this.writeToScoreboard(pinNum);
    // writeToScoreboard ends
    
    this.checkIfConotinue();
    if (this.continue === true) {
      if (this.frame === 10) {
        this.roll ++;
      } else if (pinNum === 10) {
        this.frame ++;
        this.roll = 1;
      } else if (this.roll === 1) {
        this.roll ++;
      } else if (this.roll === 2) {
        this.frame ++;
        this.roll = 1;
      }
    }
  }

  checkStrike(frame) {
    return (frame[0] === 10) ? true : false
  }

  checkSpare(frame) {
    return ((frame[0] != 10) && (frame[0] + frame[1] === 10)) ? true : false
  }

  writeToScoreboard(pinNum) {
    // this is for basic point (1 score = 1 pin)
    this.score[this.frame - 1] += pinNum
    if (this.frame > 1) {
      //this will calculate additional score for  one strike
      if (this.checkStrike(this.pinsRolled[this.frame - 2]) && this.roll == 2) {
        this.score[this.frame - 2] = 10 + this.pinsRolled[this.frame - 1][0] + this.pinsRolled[this.frame - 1][1] 
      }
      //this will calculate additional score for one spare
      if (this.checkSpare(this.pinsRolled[this.frame - 2]) && this.roll === 1) {
        this.score[this.frame - 2] = 10 + this.pinsRolled[this.frame - 1][0]
      }
      // this will calculate additional scores for the first of two consecutive strikes
      if ((this.frame > 2) && this.checkStrike(this.pinsRolled[this.frame - 3]) && this.checkStrike(this.pinsRolled[this.frame - 2])) {
        this.score[this.frame - 3] = 20 + this.pinsRolled[this.frame - 1][0]
      }
    }

  }

  getTotalScore() {
    return this.score.reduce((partial, value) => partial + value);
  }
}

module.exports = Game;
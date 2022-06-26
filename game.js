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

  writeToScoreboard(pinNum) {
    this.score[this.frame - 1] += pinNum

  }

  getTotalScore() {
    return this.score.reduce((partial, value) => partial + value);
  }
}

module.exports = Game;
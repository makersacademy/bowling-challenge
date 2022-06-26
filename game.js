class Game {
  constructor() {
    this.frame = 1;
    this.roll = 1;
    this.pinsRolled = [[], [], [], [], [], [], [], [], [], []];
    this.continue = true;
  };

  getRoll() {
    return this.roll;
  };

  getFrame() {
    return 1;
  };

  getPinsRolled() {
    return this.pinsRolled;
  };

  getContinue() {
    return this.continue;
  };

  getTotalScore() {
    return 0;
  }
}

module.exports = Game;
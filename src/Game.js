class Game {

  constructor() {
    // Initial values
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentRoll = 1;
  }

  getScore() {
    return this.totalScore;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getCurrentRoll() {
    return this.currentRoll;
  }


}

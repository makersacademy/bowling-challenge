class Game {

  constructor() {
    // Initial values
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentRoll = 1;
    this.bonus = 0;
    this.game = new Object;
  }

  // Getters (Trackers)
  getScore() { return this.totalScore; }
  getCurrentFrame() { return this.currentFrame; }
  getCurrentRoll() { return this.currentRoll; }
  getBonus() { return this.bonus; }

  // Setters

  newRoll() { this.currentRoll += 1; }

  newFrame() {
    this.currentFrame += 1;
    this.currentRoll = 1;
  }



}

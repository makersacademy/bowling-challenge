class Game {

  constructor() {

    // Constants
    this.PINS = 10;
    this.STRIKE_MSG = 'You scored a Strike!'
    this.SPARE_MSG = 'You scored a Spare!'

    // Initial values
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentRoll = 1;
    this.strike = false;
    this.spare = false;

    this.game = new Object;
  }

  // Getters

  getScore() { return this.totalScore; }

  getCurrentFrame() { return this.currentFrame; }

  getCurrentRoll() { return this.currentRoll; }

  isStrike() {
    return this.strike;
  }

  isSpare() {
    return this.spare;
  }

  // Setters

  newRoll() {
    if (this.currentRoll === 1) {
      this.currentRoll += 1;
    } else {
      this.newFrame();
    }
  }

  newFrame() {
    if (this.getCurrentFrame() === 10) return;
    this.currentFrame += 1; // Increment the frame number
    this.currentRoll = 1; // Reset the roll number
  }

  addScore(score) { this.totalScore += parseInt(score); }

  // Triggered every time player submits the form
  play(knocks) {
    this.addScore(knocks); // Add the score for the current Frame/Roll
    // Print the current Frame/Roll result on the page
    // Unless player scored a strike or spare
    this.newRoll(); // Start the next Frame/Roll
  }


}

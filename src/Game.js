class Game {

  constructor() {

    // Constants
    this.STARTING_PINS = 10;
    this.STRIKE_MSG = 'You scored a Strike!';
    this.SPARE_MSG = 'You scored a Spare!';
    this.MAX_FRAMES = 10;

    // Initial values
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentRoll = 1;

    // Initial values - variables to be reused for each frame
    this.standingPins = this.STARTING_PINS;
    this.bonus = 0;

    this.game = new Object; // do something with this later?
  }

  // Getters

  getScore() { return this.totalScore; }

  getCurrentFrame() { return this.currentFrame; }

  getCurrentRoll() { return this.currentRoll; }

  is1stRoll() {
    return (this.getCurrentRoll() === 1);
  }

  is2ndRoll() {
    return (this.getCurrentRoll() === 2);
  }

  getStandingPins() {
    return this.standingPins;
  }

  bonusToSpend() {
    return this.bonus;
  }

  isGameOver() {
    let checkFinalFrame = (this.currentFrame === this.MAX_FRAMES);
    let checkFinalRoll = (this.currentRoll === 2); // To replace magic number later
    return (checkFinalFrame && checkFinalRoll);
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
    if (this.getCurrentFrame() === this.MAX_FRAMES) return;
    this.currentFrame += 1; // Increment the frame number
    this.currentRoll = 1; // Reset the roll number
  }

  addScore(score) {
    this.totalScore += parseInt(score);
  }

  resetPins() {
    this.standingPins = this.STARTING_PINS;
  }

  checkStrikeOrSpare(knocks) {
    let isClear = (this.standingPins - knocks <= 0); // boolean
    // Here the comparison operator <= is used as a foolproof approach,
    // although the controller will need to be updated to validate user input
    // before passing the number of knocks into the models

    if (this.is1stRoll() && isClear) return 'strike';
    // no need to reset pins as no change to the initial value of this.standingPins

    if (this.is1stRoll() && isClear == false) {
      this.standingPins = this.STARTING_PINS - knocks;
    } else if (this.is2ndRoll() && isClear) {
      resetPins();
      return 'spare';
    } else {
      return 'neither';
    }
  }

  // Triggered every time player submits the form
  play(knocks) {
    this.checkStrikeOrSpare(knocks);
    this.addScore(knocks);
    this.newRoll();
  }

}

class Game {

  constructor() {

    this.MAX_FRAMES = 10;
    this.STARTING_PINS = 10;
    this.STRIKE_BONUS = 2;
    this.SPARE_BONUS = 1;

    // Variables that will accummulate
    this.totalScore = 0;
    this.currentFrame = 1;

    // Variables that will be reset/reused in each frame
    this.currentRoll = 1;
    this.standingPins = this.STARTING_PINS;

    // Create a JS object to record the game results
    this.frames = new Object;
    for (let frame = 1; frame <= this.MAX_FRAMES; frame++) {
      this.frames['frame' + frame] = new Object;
      for (let roll = 1; roll <=2; roll++) {
        this.frames['frame' + frame]['roll' + roll] = new Object;
      }
      this.frames['frame' + frame]['unspentBonus'] = 0;
    }

  }

  // Getters

  getCurrentFrame() { return this.currentFrame; }
  getCurrentRoll() { return this.currentRoll; }
  is1stRoll() { return (this.currentRoll === 1); }
  is2ndRoll() { return (this.currentRoll === 2); }

  getStandingPins() { return this.standingPins; }
  getTotalScore() { return this.totalScore; }

  getUnspentBonus(frameID) {
    return this.frames[frameID].unspentBonus;
  }

  isGameOver() {
    let checkFinalFrame = (this.currentFrame === this.MAX_FRAMES);
    let checkFinalRoll = (this.currentRoll === 2); // To replace magic number later
    return (checkFinalFrame && checkFinalRoll);
  }

  // Setters

  newFrame() {
    if (this.getCurrentFrame() === this.MAX_FRAMES) return; // Check if game end
    this.currentFrame += 1; // Increment the frame number
    this.currentRoll = 1; // Reset the roll number
  }

  setupNextPlay() {
    if (this.currentRoll === 1) {
      this.currentRoll += 1;
    } else {
      this.newFrame();
    }
  }

  resetPins() { this.standingPins = this.STARTING_PINS; }

  updateTotalScore(score) {
    this.totalScore += parseInt(score);
    return this.totalScore;
  }

  assignUnspentBonus(frameID, bonus) {
    this.frames[frameID].unspentBonus = bonus;
  }

  // Reminder to self: We don't need to hold the score if a strike or spare was
  // scored, because we know the frame score would be 10.
  // After calculating bonus, just add 10 when calculating retrospective score.

  // Supporting functions for play(userInput)

  addNote(frameID, note) {
    this.frames[frameID].notes = note;
  }

  calcRemainingPins() {}

  targetThisRollObj() {}
  targetPrevRollObj() {}


  // ================== EVERY TIME PLAYER SUBMITS THE FORM ====================
  play(userInput) {

    // Log the knocks as integers, no matter the outcome
    let knocks = parseInt(userInput);
    let thisFrame = this.getCurrentFrame();
    let thisRoll = this.getCurrentRoll();
    let frameID = `frame${thisFrame}`;
    let rollID = `roll${thisRoll}`;

    this.frames[frameID][rollID].knocks = knocks;

    // To check for unspent bonuses in prev frame and apply them if so
    // Do this after logging the knocks but before assigning any new unspent bonus

    console.log(this.frames);

    // Check if all pins are down
    let isClear = (this.standingPins - knocks <= 0);

    if (this.is1stRoll() && isClear) { // ------------------- 1st ROLL: STRIKE!
      this.addNote(frameID, 'STRIKE!');
      this.assignUnspentBonus(frameID, this.STRIKE_BONUS);
      this.newFrame();
      return;

    } else if (this.is1stRoll() && isClear == false) { // ------- 1st ROLL: MEH
      // Useful for imposing limits on user input
      this.standingPins = this.STARTING_PINS - knocks;

    } else if (this.is2ndRoll() && isClear) { // ------------- 2nd ROLL: SPARE!
      this.addNote(frameID, 'SPARE!');
      this.assignUnspentBonus(frameID, this.SPARE_BONUS);
      this.resetPins();

    } else if (this.is2ndRoll() && isClear == false) { // ------- 2nd ROLL: MEH
      let prevRollID = `roll${thisRoll - 1}`;
      let frameScore = this.frames[frameID][rollID].knocks;
      frameScore += this.frames[frameID][prevRollID].knocks;
      this.frames[frameID].totalScore = this.updateTotalScore(frameScore);
    }

    // To print output here, before setting up next play
    this.setupNextPlay();
  }

}

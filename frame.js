class Frame {
  constructor() {
    this.rollCounter = 1
    this.rolls = []
    this.score = 0
    this.live = true
  }

  getRollCounter() {
    return this.rollCounter;
  }
  getScore() {
    return this.score;
  }
  isLive() {
    return this.live;
  }
  addRoll() {
    return this.rollCounter++;
  }
  addPinsToScore(pins) {
    return this.score += pins;
  }
  minusRoll() {
    return this.rollCounter--;
  }
  getRolls() {
    return this.rolls;
  }
  addPinsToRolls(pins) {
  return this.rolls.push(pins);
  }
  isStrike() {
    return this.rolls[0] === 10;
  }
  isSpare() {
    return this.rolls.reduce((roll_one, roll_two) => roll_one + roll_two) === 10 && !this.isStrike();
  }
  resetRollCounter() {
  if (this.live === false) {
    return this.rollCounter = 1
  }
  }

  checkEndOfFrame() {
    if (this.isStrike() || this.rollCounter === 3) {
      this.live = false;
     }
  }
  
  incorrectRollCheck(pins) {
    if((pins) > 10) {
      throw 'You wish!';
    } else if(((pins) < 0) || (this.rolls[0] + (pins) > 10)) {
      throw 'Pas possible';
    }
  }
  processOfTheRoll(pins) {
    this.resetRollCounter()
    this.incorrectRollCheck(pins)
    this.addPinsToRolls(pins);
    this.addPinsToScore(pins);
    this.addRoll();
    this.checkEndOfFrame();
  }
}

module.exports = Frame
let frame = new Frame
// console.log(frame.processOfTheRoll(10))
// console.log(frame.getRollCounter())
// console.log(frame.isStrike())
// console.log(frame.isSpare())
// console.log(frame.isLive())
// console.log(frame. processOfTheRoll(2))
// console.log(frame. processOfTheRoll(8))
// console.log(frame.getRollCounter())
// console.log(frame.isStrike())
// console.log(frame.isSpare())
// console.log(frame.isLive())
// console.log(frame.getScore())


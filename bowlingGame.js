
const BowlingScore = require('./bowlingScore.js')

// const bowlingScore = new BowlingScore()

class Bowling {
  constructor() {
    this.turn = 1;
    this.frame = 1;
    this.bowlingScore = new BowlingScore;
    this.currentFrame = [];
  }
  roll(pins) {
    if(this.bowlingScore.scorecard.length === 10) {
      return "Game Over. No more rolls."
    }
    else if(this.validInput(pins)) {
      // this.score.totalScore += pins;
      this.updateCurrentFrame(pins)
      this.changeTurn();
    }
    else { return "Invalid input" }
  }
  updateCurrentFrame(pins) {
    if(this.currentFrame.length === 2) {
      this.bowlingScore.addToScorecard(this.currentFrame)
      this.currentFrame = []
      this.currentFrame.push(pins)
    }
    else { this.currentFrame.push(pins) }
  }
  validInput(pins) {
    if(this.turn === 1) { return pins >= 0 && pins <= 10 }
    else if(this.turn === 2) { return pins + this.currentFrame[0] >= 0 && pins + this.currentFrame[0] <= 10}
  }
  getTurn() {
    return this.turn;
  }
  changeTurn() {
    if(this.turn === 1) { this.turn = 2}
    else if(this.turn === 2) { 
      this.turn = 1
      this.changeFrame()
    };
  }
  changeFrame() {
    if(this.frame < 10) { this.frame += 1 }
    return "You are already on the last frame"
  }
  getFrame() {
    return this.frame;
  }
}

module.exports = Bowling
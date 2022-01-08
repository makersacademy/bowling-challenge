
class Bowling {
  constructor(score) {
    this.turn = 1;
    this.frame = 1;
    this.score = score;
  }
  roll(pins) {
    if(this.validInput(pins)) {
      this.score.totalScore += pins;
      this.changeTurn();
    }
    return "Invalid input"
  }
  validInput(pins) {
    { return pins >= 0 && pins <= 10 } 
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
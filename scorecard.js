class Scorecard {
  constructor() {
    this.score = 0
    this.frame = 1
    this.roll = 1
  }

  displayScore() {
    return this.score
  }

  displayFrame() {
    return this.frame
  }

  displayRoll() {
    return this.roll
  }

  enter(points) {
    if(this.roll === 1) {
      this.score += points
      this.roll += 1;
    } else if(this.roll === 2) {
      this.score += points
      this.roll -= 1;
      this.frame += 1;
    } else if(this.frame > 10) {
      this.score = 0
    }
    if(this.frame > 10 ) {
      return(`Game Over. Final Score ${this.score}`);
    } else {
    return `Roll: ${this.roll} -- Frame: ${this.frame} -- Total Score: ${this.score}`;
  }
  
}
}
module.exports = Scorecard
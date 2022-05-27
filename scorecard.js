const Thermostat = require("../thermostat/thermostat")

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
    this.score += points
    if(this.roll === 1) {
      this.roll = 2;
    } else if(this.roll === 2) {
      this.roll = 1;
      this.frame += 1;
    }
    return `Roll: ${this.roll} -- Frame: ${this.frame} -- Total Score: ${this.score}`
  }
}

module.exports = Scorecard
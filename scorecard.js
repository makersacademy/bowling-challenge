const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frame = new Frame();
  }

  score() {
    return this.frame.getScore();
  }

  roll(pins) {
    this.frame.rolls.push(pins)
  }

}


module.exports = Scorecard;
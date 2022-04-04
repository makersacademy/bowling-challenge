const Frame = require('./frame');

class Scorecard {
  constructor(round = 1) {
    this.round = round;
    this.allFrames = [new Frame()];
  };

  roll(pins) {
    
  }

};

module.exports = Scorecard;
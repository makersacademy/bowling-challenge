const Frame = require('./frame');

class Scorecard {
  constructor(round = 1) {
    this.round = round;
    this.xFrame = [new Frame()];
  };
};

module.exports = Scorecard;
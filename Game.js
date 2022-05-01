const Frame = require('./Frame')

class Game {

  constructor() {
    this.scoresheet = [];
  }

  playFrame(frameNumber) {
    let frame = new Frame(frameNumber);
    frame = frame.firstPlay;
    this.updateScoresheet(frame);
    return this.scoresheet;
  };

  updateScoresheet(frame) {
    this.scoresheet.push(frame['log']);
    return this.scoresheet;
  }

};

module.exports = Game;
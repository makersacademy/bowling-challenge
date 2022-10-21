const Frame = require('./frame');

class GameScore {
  constructor(frameScores = []) {
    this.frameScores = frameScores;
  }

  addFrame(frame) {
    let points = frame.framePins().reduce((val1, val2) => val1 + val2);
    this.frameScores.push(points);
  }
}

module.exports = GameScore;

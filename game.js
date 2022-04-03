const Frame = require('./frame')


class Game {
  constructor() {
    const frame1 = new Frame();
    this.frameLog = [frame1]
    this.currentFrame = 1
  }

  addRollScore(score) {
    this.frameLog.at(-1).analyseScore(score)
    this.frameManager();
  }

  frameManager() {
    this.frameLog.forEach((frame) => {
      if (!frame.isFrameCompleted) {return}
      else {
        this.currentFrame += 1; 
        this.frameLog.push(new Frame())
      };
    })
  }

  calculateScore() {
    let totalScore = 0
    this.frameLog.forEach((frame) => totalScore += frame.totalFrameScore)
    console.log(totalScore)
  }

};

module.exports = Game;

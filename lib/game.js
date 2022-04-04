const Frame = require('./frame');

class Game {
  constructor () {
    this.rollHistory = [];
    this.currentFrame = 0;
    this.totalScore = 0;
    this.frames = [
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame,
      new Frame
    ];
  }


  roll(number) {
    this.rollHistory.push(number);
    if (this.currentFrame === 0) {
      // on frame 1
      this.frames[this.currentFrame].feedRoll(number);
    } else if (this.currentFrame === 1) {
      // on frame 2
      this.frames[this.currentFrame - 1].feedRoll(number);
      this.frames[this.currentFrame].feedRoll(number);
    } else {
      // frame before with less than 3 rolls 
      this.frames[this.currentFrame - 2].feedRoll(number);
      this.frames[this.currentFrame - 1].feedRoll(number);
      this.frames[this.currentFrame].feedRoll(number);
    }
  }

  calculateScore() {
    let newTotalScore = 0;
    this.frames.forEach(frame => frame.calculateScore());
    this.frames.forEach(frame => newTotalScore += frame.score);
    this.totalScore = newTotalScore;
    return(this.totalScore);
  }

  checkFrame() {
    if (this.rollHistory[this.rollHistory.length - 1] === 10) {
      this.currentFrame += 1;
    } else if (this.frames[this.currentFrame].rolls.length === 2) {
      this.currentFrame += 1;
    } else {
      console.log('nothing to add');
    }
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

}

module.exports = Game;
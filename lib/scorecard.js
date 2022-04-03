const rl = require('readline-sync');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  getScore() {
    const input = rl.question('Enter Score > ');
    return parseInt(input);
  }

  update(frame) {
    this.frames.push(frame);
    this.printFrames();
  }

  printFrames() {
    for (let i = 0; i < this.frames.length; i++) {
      console.log(`Frame ${i + 1} - Score: ${this.frames[i].getScore()}`);
    }
  }
}

module.exports = Scorecard;

const Frame = require('../lib/frame');

class Game {
  frames = [];

  roll(rolls) {
    const frame = new Frame(rolls);
    this.frames.push(frame);
  }

  score(){
    return this.frames.reduce((score, frame, index, frames) => score + frame.total(frames[index + 1], frames[index + 2]), 0);

  }
}

module.exports = Game; 

const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = []
  }

  input_frame(rolls) { //rolls will be e.g. [2,3]
    const frame = new Frame(rolls);
    this.frames.push(frame);
  }

  score() {
    let total = 0; 
    this.frames.map((frame, index, frames) => {
      total += frame.score(frames[index+1], frames[index+2])
    });
    return total; 
  }
} 
module.exports = Scorecard;
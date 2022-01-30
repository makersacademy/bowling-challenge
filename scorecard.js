const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [] // each frame will be pushed to this array
  }

  input_frame(rolls) { //rolls will be e.g. [2,3]
    const frame = new Frame(rolls);
    this.frames.push(frame);
  }

  score() {
    // this.frames.reduce((total, frame, index, frames) => {total += frame.score(frames[index+1], frames[index+2])
    // });
    let total = 0; 
  
    this.frames.map((frame, index, frames) => {
      // console.log(total)
      // console.log(index) 
      // console.log(frame)
      total += frame.score(frames[index+1], frames[index+2])
    });
    return total; 
  }
} 
module.exports = Scorecard;

// syntax of reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
    // reducer = (score, frame, index, frames) => {
    //   return score + frame.score([frames[index+1], frames[index+2]])
    // }
    
    // this.frames.reduce(reducer, 0);
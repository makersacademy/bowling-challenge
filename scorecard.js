class Scorecard {
  constructor() {
    this.frames = [] // each frame will be pushed to this array
  }
  input_frame(rolls) { //rolls will be e.g. [2,3]
    frame = new Frame(rolls);
    this.frames.push(frame);
  }
  score() {
    return this.frames.reduce((score, frame, index, frames) => {
      return score + frame.score(frames[index+1], frames[index+2]); // the only non private method in frame therefore is .score
    }, 0)
  };
} 
module.exports = Scorecard

// syntax of reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
    // reducer = (score, frame, index, frames) => {
    //   return score + frame.score([frames[index+1], frames[index+2]])
    // }
    
    // this.frames.reduce(reducer, 0);
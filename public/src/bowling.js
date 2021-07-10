
class Bowling {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }
  score() {
    return this.frames.reduce((num, i) => num = num + i, 0);
  }
  
}
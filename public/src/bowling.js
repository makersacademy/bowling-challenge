
class Bowling {
  constructor() {
    this.frames = [];
    this.score = this.frames.reduce((num, i) => num = num + i, 0);
  }

  addFrame(frame) {
    this.frames.push(frame);
  }
  
}
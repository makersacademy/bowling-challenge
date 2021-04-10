class Bowling {
  constructor() {
    this.frames = new Array;
    this.currentFrame = 0;
  }

  roll(pins) {
    if (this.frames.length == 0) {
      this.frames.push(new Frame);
    }
    if (this.getCurrentScores().length == 2) {
      this.frames.push(new Frame);
      this.currentFrame++;
    }
    
    // can use slice instead? better way to select last element?
    this.getCurrentScores().push(pins);
  }

  getCurrentScores() {
    return this.frames[this.currentFrame].scores;
  }
}

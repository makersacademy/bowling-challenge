class Game {
  constructor() {
    this.frames = [new Frame(new Roll(-1), new Roll(-1))];
    this.currentFrameIndex = 0;
  }

  getCurrentFrame() {
    return this.frames[this.currentFrameIndex];
  }

  nextFrame() {
    this.currentFrameIndex += 1;
  }

  update() {
    if(!this.frames[this.currentFrameIndex].finished()) {
      this.frames[this.currentFrameIndex].nextRoll();
    }
  }
}
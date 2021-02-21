// let Frame = require('./Frame');

class Game {
  constructor() {
    this._frames = [];
    this.setupFrames();
    this.currentFrame = 0;
  }

  roll(int) {
    if (this.isComplete()) {
      throw new Error('Game is complete');
    }
    this.getActiveFrames().forEach((frame) => {
      frame.store(int);
    });
    this.updateCurrentFrame();
  }

  getCurrentFrame() {
    return this._frames[this.currentFrame];
  }

  getScore() {
    return this._frames.map((frame) => frame.getTotal())
      .reduce((a, b) => a + b);
  }

  isComplete() {
    return this._frames.every((frame) => frame.isComplete());
  }

  setupFrames() {
    for (let i = 0; i < 10; i++) {
      this._frames.push(new Frame());
    }
  }

  updateCurrentFrame() {
    if (this.currentFrame === 9) {
      return;
    }
    if (this.getCurrentFrame().isFull()) {
      this.currentFrame++;
    }
  }

  getActiveFrames() {
    return this._frames.slice(0, this.currentFrame + 1)
      .filter((frame) => !frame.isComplete());
  }
}

// module.exports = Game;

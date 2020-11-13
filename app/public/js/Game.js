class Game {
  constructor() {
    // this._frames = new Array(10).fill(new Frame());
    this._frames = new Array();
    this.setupFrames();
    this.currentFrame = 0;
  }
  
  roll(int) {
    if(this.isComplete()) {
      throw new Error('Game is complete');
    }
    this.getCurrentFrame().store(int);
    this.updateCurrentFrame();
  }

  getCurrentFrame() {
    return this._frames[this.currentFrame];
  }

  score() {
    return this._frames.map(this.getTotal)
      .reduce((a, b)=> {
        return a + b;
      });
  }

  getTotal(frame) {
    return frame.total();
  }

  isComplete() {
    return this.currentFrame >= 10;
  }

  setupFrames() {
    for(let i = 0; i < 10; i++) {
      this._frames.push(new Frame())
    };
  }

  updateCurrentFrame() {
    if(this.getCurrentFrame().isComplete()) {
      this.currentFrame ++;
    };
  }
}
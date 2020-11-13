class Game {
  constructor() {
    // this._frames = new Array(10).fill(new Frame());
    this._frames = new Array();
    this.setupFrames()
    this.currentFrame = 0;
  }
  
  roll(int) {
    this.getCurrentFrame().store(int);
    
    if(this.getCurrentFrame().isComplete()) {
      this.currentFrame ++;
    }
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

  setupFrames() {
    for(let i = 0; i < 10; i++) {
      this._frames.push(new Frame())
    }
  }
}
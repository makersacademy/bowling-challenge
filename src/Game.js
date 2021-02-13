class Game {
  constructor() {
    this.frames = []
    this.currentScore = 0
  }

  newFrame = () => {
    let frame = new Frame();
    this.frames.push(frame);
  }

  roll = pins => {
    this.isGameOver();
    this.frameCheck();
    this.frames[this.frames.length - 1].roll(pins)
    this.currentScore += pins;
  }

  showFrames = () => {
    return this.frames;
  }

  frameCheck = () => {
    if(this.frames.length === 0) {
      this.newFrame();
    } else if (this.frames[this.frames.length - 1].isComplete()) {
      this.newFrame()
    }
  }

  isGameOver = () => {
    if(this.frames.length === 10 && this.frames[this.frames.length - 1].isComplete()) {
      throw new Error('game complete');
    } else {
      return false;
    }
  }

  totalScore = () => this.currentScore;
}
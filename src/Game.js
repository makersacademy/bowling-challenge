class Game {
  constructor() {
    this.frames = []
    this.currentScore = 0
  }

  newFrame = () => {
    let frame = new Frame();
    this.frames.push(frame);
  }

  twoFramesAgo = () => this.frames[this.frames.length - 3];
  previousFrame = () => this.frames[this.frames.length - 2];
  currentFrame = () => this.frames[this.frames.length - 1];

  roll = pins => {
    this.isGameOver();
    this.frameCheck();
    this.currentFrame().roll(pins)

    if(this.frames.length === 1 && this.currentFrame().isComplete()) { 
      this.currentScore += this.currentFrame().frameScore;
    } else if(this.frames.length > 1 && this.currentFrame().isComplete() && !this.previousFrame().isStrike() && !this.previousFrame().isSpare()){
      this.currentScore += this.currentFrame().frameScore;
    } else if (this.frames.length > 1 && this.currentFrame().isComplete() && this.previousFrame().isSpare()) {
      this.previousFrame().update(10);
      this.currentScore += this.currentFrame().scores[0] + this.previousFrame().frameScore + this.currentFrame().frameScore;
    } else if (this.frames.length > 1 && this.currentFrame().isComplete() && !this.currentFrame().isStrike() && this.previousFrame().isStrike()) {
      this.previousFrame().update(10);
      this.currentScore += (this.currentFrame().frameScore * 2) + this.previousFrame().frameScore;
    } else if (this.frames.length > 1 && this.currentFrame().isComplete() && this.currentFrame().isStrike() && this.previousFrame().isStrike()) {
      this.previousFrame().update(10);
      this.currentScore += (this.currentFrame().frameScore * 2) + this.previousFrame().frameScore;
    }
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
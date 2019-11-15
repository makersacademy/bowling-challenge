class Scorecard {
  constructor(){
    this.rolls = 2;
    this.totalScore = 0;
    this.currentFrame;
    this.frames = [];
    this.frameCounter = 1;
  }


  addScore(){
    this.currentFrame = new Frame;
  }
}
class Scorecard {
  constructor(){
    this.rolls = 2;
    this.totalScore = 0;
    this.currentFrame = new Frame;
    this.frames = [];
    this.frameCounter = 1;
  }


  addScore(score){
    if (this.currentFrame.complete == true){
      this.currentFrame = new Frame;
      this.addScore(score)

    } else if (this.currentFrame.complete == false){
      this.currentFrame.getRoll(score);
      if (this.currentFrame.rollCounter.length == 1){
        this.totalScore += this.currentFrame.rollOne;
      } else {
        this.totalScore += this.currentFrame.rollTwo;
      }    
    }

    if (this.currentFrame.complete == true){
      this.frames.push(this.currentFrame);
    }
  }
}
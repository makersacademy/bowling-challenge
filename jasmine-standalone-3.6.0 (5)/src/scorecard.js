class Scorecard {
  constructor(){
    this.frame1 = new Frame();
    this.frame2 = new Frame();
    this.frameTotal = []
  }

  addFrames(frame){
   this.frameTotal.push(frame);
  }
}
class Scorecard {
  constructor() {
    this.gameScores = [];
    this.MAX_FRAMES = 10;
  }

  recordFrame(frameNo, rollOne = 0, rollTwo = 0) {
    const FRAME = [frameNo, rollOne, rollTwo];
    this.gameScores.push(FRAME);
  }

  isComplete(){
    return this.gameScores.length >= this.MAX_FRAMES;
  }

}
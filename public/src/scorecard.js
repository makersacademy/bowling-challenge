// eslint-disable-next-line no-unused-vars
class Scorecard {
  constructor() {
    this.gameScores = [];
    this.MAX_FRAMES = 10;
  }

  recordFrame(frameNo, rollOne = 0, rollTwo = 0) {
    const FRAME = [frameNo, rollOne, rollTwo];
    if ( !this.isComplete() ) { this.gameScores.push(FRAME) }
  }

  isComplete(){
    return this.gameScores.length >= this.MAX_FRAMES;
  }

  clearGame(){
    if ( this.isComplete() ) { this.gameScores.length = 0 }
  }

  total(){
    const TOTAL = this.gameScores.map(score => score[1] + score[2]).reduce(
      (sum, num) => sum + num);
    return TOTAL;
  }

}
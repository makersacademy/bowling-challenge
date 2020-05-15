class Bowling {

  constructor() {
    this.MAX_FRAME_SCORE = 10;
    this.POSITION = 1;
    this.FRAME = 1;
    this.frameScore = 0;
    this.totalScore = 0;
  }

  getTotalScore() {
    return this.totalScore 
  }

  getFrameScore() {
    return this.frameScore
  }

  countScore(score) {
    if(this.POSITION === 2) {
      this.POSITION = 1;
      this.FRAME += 1;
    }
    if(this.frameScore < this.MAX_FRAME_SCORE && this.POSITION <= 2) {
      this.POSITION += 1;
      this.frameScore += score;
    }
  }

}
class Bowling {

  constructor() {
    this.MAX_FRAME_SCORE = 10;
    this.firstBowl = true;
    this.frame = 1;
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
    if(this.firstBowl === false) {
      this.firstBowl = true;
      this.frame += 1;
    } else {
      this.firstBowl = false;
    }
    this.frameScore += score;
    this.totalScore += this.frameScore;
  }

}
class Bowling {

  constructor() {
    this.MAX_FRAME_SCORE = 10;
    this.firstBowl = true;
    this.frame = 1;
    this.frameScore = [];
  }

  countScore(score) {
    if(score === this.MAX_FRAME_SCORE) {
      this.frame += 1;
      this.firstBowl = true;
      this.frameScore.push(score, 0)
    } else {
      this._countHelper();
      this.frameScore.push(score);
      console.log(this.frameScore)
    }
  }
  getTotalScore() {
    return this.frameScore.reduce((a, b) => a + b, 0)
  }
  
  _countHelper() {
    if(this.firstBowl === false) {
      this.firstBowl = true;
      this.frame += 1;
    } else {
      this.firstBowl = false;
    }
    
  }

}
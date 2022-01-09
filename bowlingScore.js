class BowlingScore {
  constructor() {
    this.totalScore = 0;
    this.scorecard = [];
    this.bonus = 0;
  }
  getTotalScore() {
    this.addToTotal();
    return this.totalScore;
  }
  addToScorecard(frame_score) {
    this.scorecard.push(frame_score);
  }
  getScorecard() {
    return this.scorecard
  }
  addToTotal() {
    this.totalScore = 0;
    if(this.scorecard.length > 0) 
      this.scorecard.forEach(element => {
      this.totalScore += element[0] + element[1] 
      }
      )
      this.totalScore += this.calcBonus(this.scorecard)
    }
  calcBonus(frames) {
    this.bonus = 0
    if (frames.length >= 2) {
      for(let i = 0; i < frames.length - 1; i++) {
        if(frames[i][0] === 10) { 
          if( frames[i + 1][0] === 10) { this.bonus += frames[i + 1][0] + frames[i + 2][0] }
          else { this.bonus += frames[i + 1][0] + frames[i + 1][1] }
        }
        else if(frames[i][0] + frames[i][1] === 10) { this.bonus += frames[i + 1][0]}
      }
    }
    return(this.bonus)
  }
}

module.exports = BowlingScore
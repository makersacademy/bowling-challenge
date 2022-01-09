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
    return this.scorecard;
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
        if(this.checkStrike(frames, i)) { 
          if(this.checkStrike(frames, i + 1)) { this.addStrikeBonus(frames, i, true) }
          else { this.addStrikeBonus(frames, i, false) }
        }
        else if(this.checkSpare(frames, i)) { this.addSpareBonus(frames, i + 1) }
      }
    }
    return(this.bonus)
  }
  checkStrike(frames, frameIndex) {
    return frames[frameIndex][0] === 10;
  }
  addStrikeBonus(frames, frameIndex, doubleStrike) {
    if(doubleStrike === true) { this.bonus += frames[frameIndex + 1][0] + frames[frameIndex + 2][0] }
    else { this.bonus += frames[frameIndex + 1][0] + frames[frameIndex + 1][1] }
  }
  checkSpare(frames, frameIndex) {
    return frames[frameIndex][0] + frames[frameIndex][1] === 10;
  }
  addSpareBonus (frames, frameIndex) {
    this.bonus += frames[frameIndex][0];
  }
}

module.exports = BowlingScore
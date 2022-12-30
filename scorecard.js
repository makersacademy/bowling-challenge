class ScoreCard {
  constructor() {
    this.runningScore = 0;
  }
  
  roll(pins) {
    this.runningScore += pins;
  }
  

  totalScore() {
    return this.runningScore;
  }

}

module.exports = ScoreCard;
class ScoreCard {
  constructor() {
    this.rolls = [];
    
  }
  
  roll(pins) {
    this.rolls.push(pins);
  }
  

  totalScore() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.isSpare(frameScore)) {
        score += 10 + this.rolls[rollIndex + 2];
      } else {
        score += frameScore;
      }
      
      rollIndex += 2;
    }
    return score;
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

}

module.exports = ScoreCard;
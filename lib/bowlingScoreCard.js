class BowlingScoreCard {
  constructor() {
    this.eachRollScoreArray = [];
  }

  roll = (pinDown) => {
    this.eachRollScoreArray.push(pinDown);
  };

  overallScore = () => {
    let score = 0;
    let rollNumber = 0;
    for (let i = 0; i < 10; i++) {
      if (this.isASpareFrame(rollNumber)) {
        score += 10 + this.spareBonusScore(rollNumber);
        rollNumber += 2;
      } else if (this.isAStrikeFrame(rollNumber)) {
        score += 10 + this.strikeBonusScore(rollNumber);
        rollNumber += 1;
      } else {
        score += this.sumPinsDownInFrame(rollNumber);
        rollNumber += 2;
      }
    }
    if (this.isASpareFrame(rollNumber - 2)) {
      score += this.eachRollScoreArray[rollNumber];
    }
    return score;
  };

  sumPinsDownInFrame = (rollNumber) => {
    return (
      this.eachRollScoreArray[rollNumber] +
      this.eachRollScoreArray[rollNumber + 1]
    );
  };

  isASpareFrame = (rollNumber) => {
    return (
      this.eachRollScoreArray[rollNumber] +
        this.eachRollScoreArray[rollNumber + 1] ===
      10
    );
  };

  isAStrikeFrame = (rollNumber) => {
    return this.eachRollScoreArray[rollNumber] === 10;
  };

  spareBonusScore = (rollNumber) => {
    return this.eachRollScoreArray[rollNumber + 2];
  };

  strikeBonusScore = (rollNumber) => {
    return (
      this.eachRollScoreArray[rollNumber + 1] +
      this.eachRollScoreArray[rollNumber + 2]
    );
  };
}

module.exports = BowlingScoreCard;

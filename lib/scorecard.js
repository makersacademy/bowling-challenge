const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frame = 1;
    this.scorecard = [];
  }
  
  newFrame(firstScore, secondScore) {
    if (this.frame > 9) throw new Error('newFrame can only be called 10 times, please call newTenthFrame for the final frame')
    const frame = new Frame;
    frame.playFrame(firstScore, secondScore);
    this.addFrameToScorecard(frame);
  }
  
  newTenthFrame(firstScore, secondScore, thirdScore, fourthScore) {
    if (this.frame !== 10) throw new Error('newTenthFrame can only be called for the tenth frame')
    const frame = new Frame;
    frame.playFrame(firstScore, secondScore);
    this.addFrameToScorecard(frame);
    if (firstScore === 10) {
      frame.bonusStrikeRolls(thirdScore, fourthScore);
      this.addBonusRollsToScorecard(frame);
    } else if (firstScore + secondScore === 10) {
      frame.bonusSpareRoll(thirdScore);
      this.addBonusRollsToScorecard(frame);
    }
  }

  addFrameToScorecard(frame) {
    const scores = frame.getFrameScores();
    this.scorecard.push(scores[0]);
    this.scorecard.push(scores[1]);
    this.frame++;
  }

  addBonusRollsToScorecard(frame) {
    const bonusScores = frame.getBonusRollScores();
    this.scorecard.push(bonusScores[0]);
    this.scorecard.push(bonusScores[1]);
  }

  seeScorecard() {
    return this.scorecard;
  }
  
  calculateTotalScore() {
    if (this.frame !== 11) throw new Error('The total score can only be calculated once the game is over')
    let totalScore = this.calculateScoreWithoutBonusRolls();
    if (this.scorecard[18] + this.scorecard[19] === 10) totalScore += this.calculateScoreFromBonusRolls();
    return totalScore;
  }

  calculateScoreWithoutBonusRolls() {
    if (this.frame !== 11) throw new Error('Scores can only be calculated once the game is over')
    let totalScore = 0;
    for (let i = 0; i < 20; i++) {
      if (i % 2 === 1) continue;
      totalScore += this.calculateThreeConsecutiveStrikesBonus(i);
      totalScore += this.calculateStandardStrikeAndSpareBonuses(i)
      totalScore += (this.scorecard[i] + this.scorecard[i + 1]);
    };
    return totalScore;
  }

  calculateThreeConsecutiveStrikesBonus(i) {
    if (i >= 3 && (this.scorecard[i - 4] === 10) && (this.scorecard[i - 2] === 10)
    && this.scorecard[i] === 10) {
      return 10;
    } else {
      return 0;
    }
  }

  calculateStandardStrikeAndSpareBonuses(i) {
    if (i >= 1 && (this.scorecard[i - 2] === 10)) {
      return (this.scorecard[i] + this.scorecard[i + 1]);
    } else if (i >= 1 && (this.scorecard[i - 2] + this.scorecard[i - 1] === 10)) {
      return this.scorecard[i];
    } else {
      return 0;
    }
  }
  
  calculateScoreFromBonusRolls() {
    if (this.frame !== 11) throw new Error('Bonus scores for the tenth frame can only be calculated once the game is over')
    let bonusRollScores = 0;
    if (this.scorecard[18] === 10 && this.scorecard[16] === 10) {
      bonusRollScores += ((this.scorecard[20] * 2) + this.scorecard[21]);
    } else {
      bonusRollScores += (this.scorecard[20] + this.scorecard[21]);
    }
    return bonusRollScores;
  }  
}

module.exports = Scorecard;
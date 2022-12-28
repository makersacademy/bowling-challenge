const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frame = 1;
    this.scorecard = [];
  }

  playFullGame() {

  }
  
  newFrame(firstScore, secondScore) {
    if (this.frame > 9) throw new Error('newFrame can only be called 10 times, please call newTenthFrame for the final frame')
    const frame = new Frame;
    frame.playFrame(firstScore, secondScore);
    this.addFrameToScorecard(frame);
  }
  
  newTenthFrame(firstScore, secondScore, thirdScore, fourthScore) {
    const frame = new Frame;
    frame.playFrame(firstScore, secondScore);
    this.addFrameToScorecard(frame);
    if (firstScore === 10) {
      frame.bonusStrikeRolls(thirdScore, fourthScore);
    } else if (firstScore + secondScore === 10) {
      frame.bonusSpareRoll(thirdScore);
    }
    this.addBonusRollsToScorecard(frame);
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

  }

  calculateScoreWithoutBonusRolls() {

  }
  
  calculateScoreFromBonusRolls() {

  }  
}

module.exports = Scorecard;
const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frame = 1;
    this.scorecard = [];
  }

  playFullGame() {

  }
  
  newFrame(firstScore, secondScore) {
    if (this.frame > 9) throw new Error('newFrame can only be called 9 times, please call newTenthFrame for the final frame')
    const frame = new Frame;
    frame.playFrame(firstScore, secondScore);
    this.addFrameToScorecard(frame);
  }
  
  newTenthFrame() {

  }



  addFrameToScorecard(frame) {
    const scores = frame.getFrameScores();
    this.scorecard.push(scores[0]);
    this.scorecard.push(scores[1]);
    this.frame++;
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
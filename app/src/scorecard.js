const Frame = require('./frame');

class ScoreCard {
  constructor() {
    this.frames = [];
    this.currentFrame = null
  }

  addFrame(...args) {
    const rolls = args;
    this.processFrame(rolls)
  }

  processFrame(rolls){
    this.currentFrame = new Frame(rolls)
    this.frames.push(this.currentFrame)
    const frameNumber = this.getFrameNumber()
    this.currentFrame.setFrameNumber(frameNumber)
    this.setAndAddClaimBonuses()
  }

  getFrameNumber(){
    return this.frames.length;
  }

  setAndAddClaimBonuses(){
    this.currentFrame.rolls.forEach((roll) =>{
      this.addClaimedBonus(roll)
    })
  }

  addClaimedBonus(roll){
    this.frames.slice(0, -1).filter((frame) => frame.claimBonusFor > 0)
      .forEach((frame) => {
        frame.addClaimedBonus(roll);
        frame.reduceClaimBonusFor();
      })
  }

  calculateScore() {
    return this.frames.map((frame) => {
      return frame.getFrameScore() + frame.getFrameBonus()
    }).reduce((total, currentValue) => total + currentValue, 0)
  }
}

module.exports = ScoreCard;

// const ScoreCard = require('./app/src/scorecard')
// const scoreCard = new ScoreCard()
// for(let i = 1; i<10; i++){scoreCard.addFrame(10);}
// scoreCard.calculateScore();
// scoreCard.addFrame(10, 10, 10);
// scoreCard.calculateScore();
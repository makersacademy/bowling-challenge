const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
    this.bonusPoints = 0;
  }
  
  addFrame(frame) {
    this.frames.push(frame);
  }

  calculateScore() {
    let totalBonusScore = 0;

    for (let i = 0; i < this.frames.length; i++) {
      const currentFrame = this.frames[i];
      const nextFrame = this.frames[i + 1];
      
      totalBonusScore += currentFrame.bonusPoints(nextFrame);
    }

    const totalBaseScore = this.frames.reduce((total, frame) =>
      total + frame.basePoints(), 0)
    
    const totalScore = totalBonusScore + totalBaseScore;
    return totalScore;
  }

}






module.exports = Scorecard;

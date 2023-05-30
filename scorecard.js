// const Frame = require('./frame')

class Scorecard {
  
    constructor() {
        this.scores = [];
        
    }

    addFrame(...rolls) {
        this.scores.push(rolls);
    }

    getFrameArray() {
        return this.scores
    }

    totalFrame(frame){
    // Define the logic for summing the scores in a frame
    // Example implementation:
    return frame.reduce((sum, value) => sum + value, 0); 

    }
    totalScores() {
        let totalScore = 0;

        for (let i = 0; i < this.scores.length; i++) {
          const frame = this.scores[i];
          const frameScore = this.totalFrame(frame);
    
          if (this.isStrike(frame)) {
            totalScore += frameScore + this.bonusStrike(i);
          } else if (this.isSpare(frame)) {
            totalScore += frameScore + this.bonusSpare(i);
          } else {
            totalScore += frameScore;
          }
        }
    
        return totalScore;
      
    }

    isStrike(frame){
        return frame && frame.length > 0 && frame[0] === 10;
    }
    isSpare(frame){
        
        return this.totalFrame(frame) === 10 && !this.isStrike()
        
    }

    bonusSpare(index) {
        const nextFrame = this.scores[index + 1];
        if (nextFrame && nextFrame.length > 0) {
          return nextFrame[0];
        } else {
          return 0; // Default value when there is no next frame
        }
    }
    bonusStrike(index) {
        const nextFrame = this.scores[index + 1];
        if (nextFrame && nextFrame.length > 0) {
          return nextFrame[0] + nextFrame[1];
        } else {
          return 0; // Default value when there is no next frame
        }
    }
}

module.exports = Scorecard;

class Score {
  constructor(scorecard, pins, rollone, rolltwo, rollthree) {
      this.scorecard = [];
      this.pins = 10;
      this.rollone = rollone;
      this.rolltwo = rolltwo;
      this.rollthree = rollthree;
  }
  // Pushes scores to the scorecard array
  addScore() {
    return this.scorecard.map(() => {
        return this.scorecard.push();
    })
  }
  // Goes over the scorecard array, adds the scores within the array and returns the overall score
  calculateScore() {
    let sum = 0;
    return this.scorecard.map(() => {
        return sum = sum + scorecard;
    })
    return sum;
  } 

  addFrame() {
    return this.scorecard.push(this.rollone + this.rolltwo);
  }

//   addSpares() {
//     return this.scorecard.push(this.pins + this.rollone);
//   }

//   addStrike() {
//     return this.scorecard.push(this.pins + this.addFrame);
//   }

//   finalFrame() {
//     if this.finalFrame = this.addSpares || this.addStrike
//       return this.scorecard.push(rollthree);
//     else
//       return this.scorecard;
//   }
  
//   gutterGame() {
//     this.scorecard.push(0);
//   }

}

module.exports = Score;

function Scorecard() {
  this.totalScore = 0;
  this.frameNumber = 0;
}

Scorecard.prototype = {
  roll: function(roll) {
    this.totalScore += roll;
  },

  calculateFrame: function(roll1, roll2 = 0) {
    this.frameNumber += 1;
    if (this.frameNumber === 1) {
      a = roll1;
      // if (a !== 10) || (a + b !== 10) use roll function
      console.log('Roll 1 noted.');
    } else if (this.frameNumber === 2) {
      b = roll1;
      // if (a + b !== 10) use roll function
      console.log('Roll 2 noted.');
    } else {
      c = roll1;
      bonusScoring = a + b + c;
      this.totalScore += bonusScoring;
      console.log('Roll 3 noted.');
      console.log('Scoring equals ' + this.totalScore);
    }

  }
}

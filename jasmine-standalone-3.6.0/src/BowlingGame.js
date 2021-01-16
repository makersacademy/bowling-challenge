class BowlingGame {

  constructor() {
    this.frameRolls = [];
    this.frameScores = [];
    this.STRIKE_VALUE = 10;
  }

  addRolls(roll1, roll2= 'no throw') {
    if (roll2 === 'no throw') {
      this.frameRolls.push([roll1]);
      this.frameScores.push(roll1);
    } else {
      this.frameRolls.push([roll1, roll2]);
      this.frameScores.push(roll1 + roll2);
    }
  }

  getGameScore() {
    return this.frameScores.reduce(function(a,b) {
      return a + b;
    }, 0);
  }

  getFrameTotal(array) {
    return array.reduce(function(a,b) {
      return a + b;
    }, 0);
  }

  isPreviousFrameSpare() {
    return this.getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 2].length === 2;
    // if the total of the previous frame is 10 & it took 2 throws to get 10
  }

  isPreviousFrameStrike() {
    return this.getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 2].length === 1;
    // if the total of the previous frame is 10 and it only took 1 throw
  }

  isFrameBeforePreviousFrameStrike() {
    return this.getFrameTotal(this.frameRolls[this.frameRolls.length - 3]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 3].length === 1;
    // if the total of the frame before the previous frame is 10 and it only took 1 throw
  }

  addBonusScores() {
    if (this.frameRolls.length >= 2 && this.isPreviousFrameSpare() === true) {
      this.frameScores[this.frameScores.length - 2] += this.frameRolls[this.frameRolls.length -1][0];
      // if at least 2 frames have taken place and the previous frame was a spare, add the first roll of latest frame to score of previous frame
    }
    if (this.frameRolls.length >= 2 && this.isPreviousFrameStrike() === true) {
      this.frameScores[this.frameScores.length - 2] += this.frameScores[this.frameScores.length - 1]
      // if at least 2 frames have taken place and the previous frame was a strike, add total score of latest frame to total score of the frame previous
    }
    if (this.frameRolls.length >= 3 && this.isPreviousFrameStrike() === true && this.isFrameBeforePreviousFrameStrike() === true) {
      this.frameScores[this.frameScores.length - 3] += this.frameRolls[this.frameRolls.length -1][0];
      // if at least 3 frames have taken place and the previous 2 frames were both strikes, then add the first throw of latest frame to the total of the frame 2 frames previous
    }
  }

}

class BowlingGame {

  constructor() {
    this.frameRolls = [];
    this.frameScores = [];
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
    return this.getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === 10 && this.frameRolls[this.frameRolls.length - 2].length === 2;
  }

  isPreviousFrameStrike() {
    return this.getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === 10 && this.frameRolls[this.frameRolls.length - 2].length === 1;
  }

}

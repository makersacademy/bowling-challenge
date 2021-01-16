class BowlingGame {

  constructor() {
    this.frameRolls = [];
    this.frameScores = [];
  }

  addRolls(roll1, roll2= 0) {
    this.frameRolls.push([roll1, roll2]);
    this.frameScores.push(roll1 + roll2);
  }

  getGameScore() {
    return this.frameScores.reduce(function(a,b) {
      return a + b
    }, 0);
  }

}

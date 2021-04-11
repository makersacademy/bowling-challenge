class Game {
  constructor () {
    this.frame = 0;
    this.gameScore = new Array(10);
    this.frameClass = new Frame();
    this.scoreClass = new Score();
  }

  roll (roll1, roll2 = null, roll3 = null) {
    if (this.frame !== 9 && roll3 !== null) {
      return console.log('Unable to input 3 rolls unless in tenth frame');
    }
    if (this.frame !== 9 && roll1 + roll2 > 10) {
      return console.log('Rolls must not exceed a total of ten');
    }
    let bonus = this.frameClass.calcBonus(roll1, roll2);
    if (this.frame === 9) {
      var score = this.scoreClass.calculateFrame10(roll1, roll2, roll3);
    } else {
      var score = this.scoreClass.calculate(roll1, roll2, bonus);
    }
    this.storeScore(score[0], score[1], score[2]);
    this.frame += 1;
  }

  storeScore (score, bonusScore, previousBonusScore) {
    this.gameScore[this.frame] = score;
    if (this.frame === 1) {
      this.gameScore[this.frame - 1] = this.gameScore[this.frame - 1] + bonusScore;
    } else if (this.frame > 1) {
      this.gameScore[this.frame - 1] = this.gameScore[this.frame - 1] + bonusScore;
      this.gameScore[this.frame - 2] = this.gameScore[this.frame - 2] + previousBonusScore;
    }
    if (this.frame === 9) {
      return this.gameScore.reduce((a, b) => a + b, 0);
    }
  }
}

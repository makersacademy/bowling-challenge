class Bowling {

  constructor() {
     this.score = [];
      this.frame = 0;
      this.TOTAL_PINS = 10
  }

  newFrame(roll_1, roll_2 = 0) {

      this.checkPins
      this.frame ++

      if (this.frame > 1 && this.isSpare(roll_1, roll_2)) {
          this.score[(this.frame -2)].push([roll_1]);
          this._addToScore(roll_1, roll_2);
      }
      else {
          this._addToScore(roll_1, roll_2);
      }


  }

  _addToScore(roll_1, roll_2) {
      this.score.push([roll_1, roll_2]);
  }



  isSpare(roll_1, roll_2) {
      return roll_1 + roll_2 === this.TOTAL_PINS;
  }

  isStrike(roll_1) {
      return (roll_1 === this.TOTAL_PINS);
  }


  checkPins(roll_1, roll_2) {
      if (roll_1 + roll_2 > this.TOTAL_PINS) {
          return 'Impossible score!';
      }
  }

  getScore() {
      return this.score;
  }

  checkFrameCount() {
      return this.frame;
  }

  totalScore() {
      var scoreFlat = this.score.flat();

     return scoreFlat.reduce((a,b) => a + b, 0)
  }






}

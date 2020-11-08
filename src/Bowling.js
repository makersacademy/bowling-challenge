class Bowling {

  constructor() {
    this.rollScore = [];
    this.index = 0;
    this.result = 0;
  };

    getCurrentRollScore() {
      return this.rollScore;
    };

    getCurrentResult() {
      return this.result;
    };

    roll(pins) {
      this.rollScore.push(pins);
    };

    totalScore() {
      for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
        if(isStrike()) {
          this.strikeScore;
          this.index ++;
        } else if(isSpare()) {
          this.result += this.spareScore;
          this.index ++;
        } else {
          this.result += this.gameScore;
        }
      }
    };

    gameScore() {
        return this.rollScore.reduce((a, b) => a + b, 0);
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // STRIKE CHECK AND SCORE
    isStrike() {
      this.rollScore[this.index] === 10;
    };

    strikeScore() {
      return 10 + this.rollScore[this.index + 1] + this.rollScore[this.index + 2]
    };

    // SPARE CHECK AND SCORE
    isSpare() {
      this.rollScore[this.index] + this.rollScore[this.index + 1] === 10;
    };

    spareScore() {
      return 10 + this.rollScore[this.index + 1];
    };
  //   ////////////////////////////////////////////////////////////////////////////////////////////////

};

// bowlingScore(rolls) {
//   for (let frame = 0; frame < 10; frame ++) {
//     if(rolls[this.index] == 10) {
//       this.result += 10 + rolls[this.index+1] + rolls[this.index +2];
//     } else if (rolls[this.index] + rolls[this.index+1] === 10) {
//       this.result += 10 + rolls[this.index+2];
//       this.index++;
//     } else {
//       this.result += rolls[this.index] + rolls[this.index+1];
//       this.index++;
//     }
//     this.index++;
//   }
//   return this.result;
// };
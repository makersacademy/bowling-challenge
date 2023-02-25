const Bowling = require("./bowling");
const readlineSync = require("readline-sync");

class Game {
  constructor() {
    this.arr = [];
    this.frameIndex = 0;
  }

  ui() {
    console.log("Welcome to the bowling score calculator");
    while (true) {
      if (this.frameIndex === 9) {
        console.log(`Enter roll 1 of round: ${this.frameIndex + 1}`);
        let score1 = parseInt(readlineSync.question());
        console.log(`Enter roll 2 of round: ${this.frameIndex + 1}`);
        let score2 = parseInt(readlineSync.question());
        if (score1 === 10 || score1 + score2 === 10) {
          console.log("Enter bonus roll: ");
          let score3 = parseInt(readlineSync.question());
          this.arr.push([score1, score2, score3]);
          this.frameIndex++;
          const score = new Bowling(this.arr);
          console.log(score.get_scores());
          break;
        } else {
          this.arr.push([score1, score2]);
          const score = new Bowling(this.arr);
          console.log(score.get_scores());
          this.frameIndex++;
          break;
        }
      }
      console.log(`Enter roll 1 of round: ${this.frameIndex + 1}`);
      let score1 = parseInt(readlineSync.question());
      if (score1 === 10) {
        this.arr.push([score1]);
        this.frameIndex++;
      } else {
        console.log(`Enter roll 2 of round: ${this.frameIndex + 1}`);
        let score2 = parseInt(readlineSync.question());
        if (score1 + score2 > 10) {
          console.log(
            "You have entered a incorrect score, please enter again: "
          );
        } else {
          this.arr.push([score1, score2]);
          this.frameIndex++;
        }
      }
    }
  }
}

module.exports = Game;

const scoregame = new Game();
scoregame.ui();

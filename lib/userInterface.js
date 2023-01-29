const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const BowlingScoreCard = require("./bowlingScoreCard");

class UserInterface {
  constructor() {
    this.scoreCard = new BowlingScoreCard();
  }

  start() {
    console.log(chalk.cyan("Welcome to the Bowling Score Card Application!"));
    this.playFrame(1, 1);
  }

  playFrame(frameNum, rollNum) {
    console.log(chalk.yellow(`Frame ${frameNum} - Roll ${rollNum}`));
    rl.question("Enter the number of pins down: ", (pinsDown) => {
      const roll = parseInt(pinsDown);
      this.scoreCard.roll(roll);
      if (rollNum === 1) {
        if (pinsDown === 10) {
          console.log(chalk.red("STRIKE!"));
          this.playFrame(frameNum + 1, 1);
        } else {
          this.playFrame(frameNum, rollNum + 1);
        }
      } else if (rollNum === 2) {
        if (frameNum === 10) {
          const frameScore = this.scoreCard.sumPinsDownInFrame(
            this.scoreCard.eachRollScoreArray.length - 2
          );
          if (frameScore === 10) {
            this.playFrame(frameNum, rollNum + 1);
          } else {
            console.log(
              chalk.green(
                `Your overall score is: ${this.scoreCard.overallScore()}`
              )
            );
            rl.close();
          }
        } else {
          this.playFrame(frameNum + 1, 1);
        }
      } else {
        console.log(
          chalk.green(`Your overall score is: ${this.scoreCard.overallScore()}`)
        );
        rl.close();
      }
    });
  }
}

module.exports = UserInterface;

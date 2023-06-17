const Scoreboard = require("./scoreboard");
const readline = require("readline");

class Game {
  constructor() {
    this.scoreboard = new Scoreboard();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  startGame() {
    this.playFrame(1);
  }

  playFrame(frame) {
    console.log(`Frame ${frame}:`);

    this.rl.question(
      "Enter the number of pins knocked down in the first roll: ",
      (roll1) => {
        roll1 = parseInt(roll1);
        this.scoreboard.roll(roll1);

        if (roll1 === 10) {
          console.log("\nSTRIKE!!!\n");
          console.log(
            `\nCurrent Score without bonus: ${this.scoreboard.currentScore()}\n`
          );
          this.moveToNextFrame(frame);
        } else if (roll1 < 10) {
          this.rl.question(
            "Enter the number of pins knocked down in the second roll: ",
            (roll2) => {
              roll2 = parseInt(roll2);
              this.scoreboard.roll(roll2);

              if (roll2 === 10) {
                console.log("STRIKE!!!\n");
              } else if (roll1 + roll2 === 10) {
                console.log("\nSPARE!!!\n");
              }
              console.log(
                `\nCurrent Score without bonus: ${this.scoreboard.currentScore()}\n`
              );
              this.moveToNextFrame(frame);
            }
          );
        }
      }
    );
  }

  moveToNextFrame(currentFrame) {
    if (currentFrame < 9) {
      const nextFrame = currentFrame + 1;
      this.playFrame(nextFrame);
    } else {
      console.log("Frame 10:");
      this.rl.question(
        "Enter the number of pins knocked down in the first roll: ",
        (roll1) => {
          roll1 = parseInt(roll1);
          this.scoreboard.roll(roll1);

          if (roll1 === 10) {
            this.rl.question(
              "Enter the number of pins knocked down in the second roll: ",
              (roll2) => {
                roll2 = parseInt(roll2);
                this.scoreboard.roll(roll2);

                this.rl.question(
                  "Enter the number of pins knocked down in the third roll: ",
                  (roll3) => {
                    roll3 = parseInt(roll3);
                    this.scoreboard.roll(roll3);

                    console.log(`Total Score with bonus: ${this.totalScore()}`);
                    this.rl.close();
                  }
                );
              }
            );
          } else if (roll1 < 10) {
            this.rl.question(
              "Enter the number of pins knocked down in the second roll: ",
              (roll2) => {
                roll2 = parseInt(roll2);
                this.scoreboard.roll(roll2);

                if (roll1 + roll2 === 10) {
                  this.rl.question(
                    "Enter the number of pins knocked down in the third roll: ",
                    (roll3) => {
                      roll3 = parseInt(roll3);
                      this.scoreboard.roll(roll3);

                      console.log(
                        `Total Score with bonus: ${this.totalScore()}`
                      );
                      this.rl.close();
                    }
                  );
                } else {
                  console.log(`Total Score with bonus: ${this.totalScore()}`);
                  this.rl.close();
                }
              }
            );
          }
        }
      );
    }
  }

  totalScore() {
    return this.scoreboard.score();
  }
}

const game = new Game();
game.startGame();

module.exports = Game;

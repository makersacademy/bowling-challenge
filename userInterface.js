// === Buggy version ===
// class UserInterface {
//   constructor(scorecard) {
//     this.scorecard = scorecard;
//     this.rl = readline.createInterface({ input, output });
//   }
//   tellMeTheScore() {
//     this.rl.question("What is your name? ", (answer) => {
//       const score = this.scorecard.getGameStateInfo().gameInfo.score;
//       this.rl.write(
//         `Thanks, ${answer}. The current score is ${score}.`
//       );
//       this.tellMeTheScore();
//     });
//   }
// }

class UserInterface {
  constructor(scorecard, readlineInterface) {
    this.scorecard = scorecard;
    // e.g. `readlineInterface` = readline.createInterface({ input, output });
    this.rl = readlineInterface;
  }
  async showGameStateInfo() {
    const gameStateInfo = this.scorecard.getGameStateInfo();
    const score = gameStateInfo.gameInfo.score;
    if (gameStateInfo.finished) {
      await this.rl.write(
        `Game finished!\nYour score was: ${score}\n`
      );
    } else {
      const frame = gameStateInfo.gameInfo.frame;
      const rollInFrame = gameStateInfo.gameInfo.nextRoll;
      if (gameStateInfo.gameInfo.isFinalFrameBonusRoll) {
        await this.rl.write(
          "Next up:\n" +
          "  Final frame bonus roll!\n" +
          `  Frame ${frame} | Roll ${rollInFrame}\n` +
          `Score so far: ${score}\n`
        );
      } else {
        await this.rl.write(
          "Next up:\n" +
          `  Frame ${frame} | Roll ${rollInFrame}\n` +
          `Score so far: ${score}\n`
        );
      }
    }
    return;
  }
  gameIsFinished() {
    return this.scorecard.getGameStateInfo().finished;
  }
  async addRollToScorecard() {
    // await this.rl.write("Pins knocked down this roll:\n");
    // const pinsHit = await this.rl.question("> ");
    const pinsHit = await this.rl.question("Pins knocked down this roll:\n> ");
    try {
      this.scorecard.addRoll(Number(pinsHit));
    } catch(error) {
      await this.rl.write("Sorry! That doesn't look quite right - please double check.\n");
      await this.addRollToScorecard();
    }
  }
}

module.exports = UserInterface;

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

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
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.rl = readline.createInterface({ input, output });
  }
  tellMeTheScore() {
    this.rl.question("What is your name?", (answer) => {
      const score = this.scorecard.getGameStateInfo.gameInfo.score;
      this.rl.write(
        `Thanks, ${answer}. The current score is ${score}.`
      );
    });
  }
}

module.exports = UserInterface;

const readline = require('readline');
const Game = require('../classes/game');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function playGame() {
  const game = new Game();
  game.startGame();

  while (game.frameCount < game.scorecard.MAX_FRAMES) {
    console.log(`Frame ${game.frameCount + 1}`);

    const firstRoll = parseInt(await prompt('Enter the first roll: '));
    let secondRoll = 0;
    let thirdRoll = 0;

    if (firstRoll < 10 || game.frameCount === game.scorecard.MAX_FRAMES - 1) {
      secondRoll = parseInt(await prompt('Enter the second roll: '));
    }

    if (game.frameCount === game.scorecard.MAX_FRAMES - 1 && (firstRoll + secondRoll >= 10)) {
      thirdRoll = parseInt(await prompt('Enter the third roll: '));
    }

    game.roll(firstRoll, secondRoll, thirdRoll);

    // Display messages for Strikes and Spares
    const currentFrame = game.scorecard.frames[game.frameCount - 1];
    if (currentFrame.isStrike()) {
      console.log('Strike!');
    } else if (currentFrame.isSpare()) {
      console.log('Spare!');
    }
  }

  // Display messages for Perfect Game and Gutter Game
  if (game.scorecard.isPerfectGame()) {
    console.log('Congratulations, you scored a Perfect Game!');
  } else if (game.scorecard.isGutterGame()) {
    console.log('Oh no, it\'s a Gutter Game...');
  } else {
    console.log(`Final score: ${game.scorecard.getScore()}`);
  }

  rl.close();
}

module.exports = playGame;

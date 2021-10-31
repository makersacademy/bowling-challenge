const Bowling = require('./bowling');
const Frame = require('./frame');
const rl = require('readline-sync');

const game = new Bowling();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  'Welcome to Bowling! For each roll, enter how many pins you knocked down. Good Luck!'
);
while (!game.gameOver) {
  let input = rl.question('Enter your roll: ');
  input = parseInt(input, 10);
  if (numbers.includes(input)) {
    if (!game.currentFrame || validRoll(input)) {
      game.roll(input);
      if (game.currentFrame) {
        showFrameAndScorecard(input);
      } else {
        console.log(game.scorecard());
      }
    } else {
      console.log('No cheating!');
    }
  } else {
    console.log('Please enter a number between 0 and 10');
  }
}

console.log(`Game Over! Your total score was ${game.totalScore()}`);

function validRoll(inputPin) {
  if (game.currentFrame instanceof Frame.FinalFrame) {
    if (game.currentFrame.isStrike() || game.currentFrame.length == 2) {
      return true;
    } else {
      return game.currentFrame.pins[0] + inputPin <= 10;
    }
  } else {
    return game.currentFrame.pins[0] + inputPin <= 10;
  }
}

function showFrameAndScorecard(input) {
  if (game.frames.length === 0) {
    console.log(`${input}`);
  } else {
    console.log(
      [
        `${game.scorecardClass.showPins(
          game.frames
        )} | ${game.scorecardClass.format(game.currentFrame)}`,
        `${game.scorecardClass.showTotals(game.frames)} |`,
      ].join('\n')
    );
  }
}

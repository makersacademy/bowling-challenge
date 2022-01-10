const readline = require('readline');
const Game = require('./game');

const game = new Game();

function cli() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface(process.stdin, process.stdout);
    console.log('Bowling Scorecard');
    rl.setPrompt('Enter Command> ');
    rl.prompt();
    rl.on('line', (line) => {
      if (line === 'exit' || line === 'quit' || line == 'q') {
        rl.close();
        return; // bail here, so rl.prompt() isn't called again
      }

      if (line === 'help' || line === '?') {
        console.log('commands:\n  Enter a number\n score\n exit|quit\n');
      } else if (Number.isInteger(parseInt(line))) {
        game.roll(parseInt(line));
      } else if (line === 'score') {
        console.log(`Total score: ${game.score()}`);
        game.frames.forEach((frame, index) => {
          console.log(`Round ${index + 1}: Rolls - ${frame.rolls} Bonus - ${frame.bonus}`);
        });
      } else {
        console.log(`unknown command: "${line}"`);
      }
      rl.prompt();
    }).on('close', () => {
      resolve(); // this is the final result of the function
    });
  });
}

async function run() {
  try {
    const replResult = await cli();
  } catch (e) {
    console.log('failed:', e);
  }
}

run();

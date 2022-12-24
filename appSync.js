const readline = require('readline-sync');

const Frame = require('./frame');
const Game = require('./game');

const game = new Game;

const playNewFrame = () => {

  
  const frame = new Frame;
  let counter = 0

  while(true) {
    counter += 1;
  
    let pins = parseInt(readline.question(`Type number of pins knocked down in frame 1, roll ${counter}:\n`));

    while(pins > (10 - frame.score())) {
      pins = parseInt(readline.question('Number too big, try again:\n'));
    }
  
    frame.addRoll(pins);

    if (counter === 2 || pins === 10) {
      break;
    }

  }
  game.addFrame(frame);
  console.log(frame.rolls);
}

const frameByFrameScore = () => {
  console.log(game.updateScorecard());
}

playNewFrame();
playNewFrame();
playNewFrame();
frameByFrameScore();
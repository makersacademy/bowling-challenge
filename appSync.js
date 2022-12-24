const readline = require('readline-sync');

const Frame = require('./frame');
const Game = require('./game');


const main = () => {

  const frame1 = new Frame;
  let counter1 = 0

  while(true) {
    counter1 += 1;
  
    let pins1 = parseInt(readline.question(`Add number of pins knocked down for frame 1, roll ${counter1}:\n`));

    while(pins1 > (10 - frame1.score())) {
      pins1 = parseInt(readline.question('Number too big, try again:\n'));
    }
  
    frame1.addRoll(pins1);
    
    if (counter1 === 2 || pins1 === 10) {
      break;
    }
  }

  const frame2 = new Frame;
  let counter2 = 0

  while(true) {
    counter2 += 1;
  
    let pins2 = parseInt(readline.question(`Type number of pins knocked down in frame 2, roll ${counter2}:\n`));

    while(pins2 > (10 - frame2.score())) {
      pins2 = parseInt(readline.question('Number too big, try again:\n'));
    }
  
    frame2.addRoll(pins2);

    if (counter2 === 2 || pins2 === 10) {
      break;
    }
  }

  console.log(frame1.rolls);
  console.log(frame2.rolls);
}

main();
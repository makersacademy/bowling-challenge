const readlineSync = require('readline-sync');
const Repository = require('./repository.js');

console.log('Welcome to Bowling Scorecard!');
console.log('Enter the score for each frame (roll 1 and roll 2). Press enter after each frame.');
console.log('Enter 10 for a strike.');

function play_game() {
  const repository = new Repository();

  for (let frame_number = 0; frame_number < 10; frame_number++) {
    if (frame_number <= 8) {
      process.stdout.write(`Frame ${frame_number + 1} - Roll 1: `);
      let roll1 = parseInt(readlineSync.question(''));
      
      while (roll1 > 10) {
        console.log('VALUE INVALID');
        console.log('---------------------------------------------------------------------------');
        console.log('ENTER VALID SCORE');
        process.stdout.write(`Frame ${frame_number + 1} - Roll 1: `);
        roll1 = parseInt(readlineSync.question(''));
      }

      if (roll1 === 10) {
        repository.add_frame(roll1, 0, 0);
        continue;
      }

      process.stdout.write('Roll 2: ');
      let roll2 = parseInt(readlineSync.question(''));
      
      while (roll1 + roll2 > 10) {
        console.log('VALUE INVALID');
        console.log('---------------------------------------------------------------------------');
        console.log('ENTER VALID SCORE');
        process.stdout.write('Roll 2: ');
        roll2 = parseInt(readlineSync.question(''));
      }

      repository.add_frame(roll1, roll2, 0);
    } else if (frame_number === 9) {
      process.stdout.write(`Frame ${frame_number + 1} - Roll 1: `);
      let roll1 = parseInt(readlineSync.question(''));
      
      while (roll1 > 10) {
        console.log('VALUE INVALID');
        console.log('---------------------------------------------------------------------------');
        console.log('ENTER VALID SCORE');
        process.stdout.write(`Frame ${frame_number + 1} - Roll 1: `);
        roll1 = parseInt(readlineSync.question(''));
      }
      
      process.stdout.write('Roll 2: ');
      let roll2 = parseInt(readlineSync.question(''));

      if (roll1 !== 10) {
        while (roll1 + roll2 > 10) {
          console.log('VALUE INVALID');
          console.log('---------------------------------------------------------------------------');
          console.log('ENTER VALID SCORE');
          process.stdout.write('Roll 2: ');
          roll2 = parseInt(readlineSync.question(''));
        }
      } else if (roll1 === 10) {
        while (roll2 > 10) {
          console.log('VALUE INVALID');
          console.log('---------------------------------------------------------------------------');
          console.log('ENTER VALID SCORE');
          process.stdout.write('Roll 2: ');
          roll2 = parseInt(readlineSync.question(''));
        }
      }

      if (roll1 + roll2 >= 10) {
        process.stdout.write('Roll 3: ');
        const roll3 = parseInt(readlineSync.question(''));

        while (roll3 > 10) {
          console.log('VALUE INVALID');
          console.log('---------------------------------------------------------------------------');
          console.log('ENTER VALID SCORE');
          process.stdout.write('Roll 3: ');
          roll3 = parseInt(readlineSync.question(''));
        }

        repository.add_frame(roll1, roll2, roll3);
      } else {
        repository.add_frame(roll1, roll2, 0);
      }
    }
  }
}

play_game();

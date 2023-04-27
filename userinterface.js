const { resolve } = require('path');
const Scorecard = require('./scorecard');
const readline = require('readline');

class UserInterface {
  constructor () {
    const scorecard = new Scorecard();
    
  }

  async runGame() {
    const frames = [];

    for (let i = 1; i <= 10; i++) {
      let results = await this.playFrame(i);
      frames.push(results);
    }

    console.log(frames);
  }

  async playFrame(frame_number) {
    const rl = readline.createInterface(process.stdin, process.stdout);
    let frame_arr = [];
    console.log(`Round ${frame_number}`);

    const frame = await new Promise((resolve) => {
      
      rl.question('Enter score, bowl 1: ', (answer1) => {
        let result = parseInt(answer1);

        if (result === 10){
          resolve(frame_arr.push(parseInt(answer1), 0));
          console.log(`You entered ${answer1} for bowl 1 and 0 for bowl 2.`);
          rl.close();
        } else {
          rl.question('Enter score, bowl 2: ', (answer2) => {
            resolve(frame_arr.push(parseInt(answer1), parseInt(answer2)));
            console.log(`You entered ${answer1} for bowl 1 and ${answer2} for bowl 2.`);
            rl.close();
          });
        }

      });
    });

    return frame_arr;
  }
}

ui = new UserInterface();
ui.runGame();


module.exports = UserInterface;
const { resolve } = require('path');
const Scorecard = require('./scorecard');
const Frame = require('./frame');
const readline = require('readline');

class UserInterface {
  constructor () {
    this.scorecard = new Scorecard();
    this.frames = [];
  }

  async runGame() {
    for (let i = 1; i <= 10; i++) {
      let results = await this.playFrame(i);
      this.frames.push(results);
    }
    
    this.createGame();
    this.checkTenthFrame();
    this.returnScore();
  }

  async playFrame(frame_number) {
    const rl = readline.createInterface(process.stdin, process.stdout);
    let frame_arr = [];
    console.log(`Round ${frame_number}`);

    const frame = await new Promise((resolve) => {
      
      rl.question('Enter score, bowl 1: ', (answer1) => {
        let ans_1_int = parseInt(answer1);

        if (ans_1_int === 10){
          resolve(frame_arr.push(ans_1_int, 0));
          console.log(`You entered ${answer1} for bowl 1 and 0 for bowl 2.`);
          rl.close();
        } else {
          rl.question('Enter score, bowl 2: ', (answer2) => {
            let ans_2_int = parseInt(answer2)
            resolve(frame_arr.push(ans_1_int, ans_2_int));
            console.log(`You entered ${answer1} for bowl 1 and ${answer2} for bowl 2.`);
            rl.close();
          });
        }
      });
    });

    return frame_arr;
  }

  createGame () {
    let i = 1
    this.frames.forEach((frame) => {
      this.scorecard.addFrame(i, frame);
      i++;
    })
  }

  checkTenthFrame () {
    const game_objects = this.scorecard.getThisGame();
    if(game_objects[9].getStrike() || game_objects[9].getSpare()) {
      const eleventh_frame = this.playFrame(11);
      this.scorecard.addFrame(eleventh_frame);
    }
  }

  returnScore () {
    this.scorecard.calculateScore();
    console.log(`Total Score: ${this.scorecard.getScore()}`);
  }
}

ui = new UserInterface();
ui.runGame();



module.exports = UserInterface;
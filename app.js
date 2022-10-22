const Frame = require('./frame');
const Score = require('./score');
const prompt = require('prompt-sync')({sigint: true});

class App {
  constructor() {
    this.roll_1 = 0;
    this.roll_2 = 0;
    this.score = new Score();
  };

  run() {
    console.log('Welcome to bowling!');

    for (let i = 1; i <= 10; i++) {
      console.log(`\nFrame ${i}`)
      this.roll_1 = prompt('Please enter the first number of knocked down pins: ');
      this.roll_2 = prompt('Please enter the second number of knocked down pins: ');

      this.addFrames(Number(this.roll_1), Number(this.roll_2));
    }

    console.log(`\nCongratulations, your total score is ${this.score.total()}!`);
  };

  addFrames(roll_1, roll_2) {
    const frame = new Frame(roll_1, roll_2);
    this.score.add(frame);
  };
};

module.exports = App;

// const app = new App;
// app.run();
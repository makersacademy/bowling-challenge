const Frame = require('./frame');
const Game = require('./game');

class App
    constructor() {
        this.roll1 =  0;
        this.roll2 =  0;
        this.game = new Score ();

    };

    run() {
        console.log('BOWL!');
    
        for (let i = 1; i <= 10; i++) {
          console.log(`\nFrame ${i}`)
          this.roll_1 = prompt('Please enter the first number of knocked down pins: ');
          this.roll_2 = prompt('Please enter the second number of knocked down pins: ');
    
          this.addFrames(Number(this.roll_1), Number(this.roll_2));
        }
    
        console.log(`\nCongrats, your total score is ${this.score.total()}!`);
      };
    
      addFrames(roll_1, roll_2) {
        const frame = new Frame(roll_1, roll_2);
        this.score.add(frame);
      };
    };

module.exports = App;
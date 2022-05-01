// var readline = require('readline');

class Frame {

  constructor() {
    this.standingPins = 10
    this.log = {
      firstRoll: null
    }
  }

  // async userInput() {
  //   const rl = readline.createInterface( process.stdin, process.stdout );
  //   rl.question('Roll... how many did you knock down?', (roll) => {
  //     console.log('Your roll is: ' + roll);
  //     return roll;
  //   });
  // };

  roll(userInput) {
    if ( userInput > this.standingPins ) {
      throw new Error('User input exceeds standing pins')
    } else {
      this.standingPins -= userInput;
    };
  };

  updateLog(key, result) {
    this.log['firstRoll'] = result;
  }
};

module.exports = Frame;
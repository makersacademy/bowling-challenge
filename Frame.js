// var readline = require('readline');

class Frame {

  constructor() {
    this.standingPins = 10;
    this.log = {
      firstRoll: null,
      secondRoll: null,
      bonus: null,
      score: null
    };
  }

  // async userInput() {
  //   const rl = readline.createInterface( process.stdin, process.stdout );
  //   rl.question('Roll... how many did you knock down?', (roll) => {
  //     console.log('Your roll is: ' + roll);
  //     return roll;
  //   });
  // };

  firstPlay(userInput) {
    let roll = this.roll(userInput);
    this.updateLog('firstRoll', roll);
    return this
  }

  secondPlay(userInput) {
    let roll = this.roll(userInput);
    this.updateLog('secondRoll', roll);
    return this
  }

  roll(userInput) {
    if ( userInput > this.standingPins ) {
      throw new Error('User input exceeds standing pins')
    } else {
      this.standingPins -= userInput;
    };
    return userInput;
  };

  updateLog(key, result) {
    this.log[`${key}`] = result;
    this.#privateLogScoreAndBonuses(key,result)
  };

  #privateLogScoreAndBonuses(key, result) {
    if (key === 'firstRoll' && result === 10) {
      this.log['bonus'] = 'strike';
    } else if (key === 'secondRoll') {
      if (result + this.log['firstRoll'] === 10) {
        this.log['bonus'] = 'spare'
      } else {
        this.log['score'] = this.log['firstRoll'] + this.log['secondRoll']
      }
    };
  }
};

module.exports = Frame;
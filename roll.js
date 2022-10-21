const prompt = require('prompt-sync')({sigint: true});

class Roll {

  constructor() {
    this.roll = null
  }

  roll() {
    let input = prompt('Roll');
  }
}

module.exports = Roll;
class Frame {

  constructor() {
    this.standingPins = 10
  }

  roll(userInput) {
    if ( userInput > this.standingPins ) {
      throw new Error('User input exceeds standing pins')
    } else {
      this.standingPins -= userInput;
    };
  };
};

module.exports = Frame;
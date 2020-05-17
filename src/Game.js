class Game {
  constructor(){
    this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentRoll = 0;
    //this.pinErr = new Error('Please choose number between 1 to 10.')
  }

  roll(pins) {
    if(pins > 10){
      return 'Please choose number between 1 to 10.'
    }
    this.rolls[this.currentRoll] = pins
    this.currentRoll ++
  }
}


class Game {
  constructor(){
    this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentRoll = 0;
    this.maxPins = 10;
    this.maxLength = 21;
  }

  roll(pins) {
    if(pins > this.maxPins){
      return 'Please choose number between 1 to 10.';
    }
    else if(this.rolls.length === this.maxLength && !this.rolls.includes(0)){
      return;
    }
    this.rolls[this.currentRoll] = pins
    this.currentRoll ++
  }
}


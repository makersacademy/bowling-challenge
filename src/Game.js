class Game {
  constructor(){
    this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentRoll = 0;
    this.maxPins = 10;
    this.maxLength = 21;
  }
};

Game.prototype.roll = function(pins) {
  if(pins > this.maxPins){
    return 'Please choose number between 0 to 10.';
  }
  else if(this.rolls.length === this.maxLength && !this.rolls.includes(0)){
    return;
  }
  this.rolls[this.currentRoll] = pins;
  this.currentRoll ++;
};
// if index === strike 
// if index === spare 

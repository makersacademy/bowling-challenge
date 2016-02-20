function Frame(){
  this.rolls = [];
  this.START_PINS = 10;
};

Frame.prototype.addRoll = function (rollValue) {
  if(rollValue > this.pinsLeft()) {
    throw 'Value exceeds number of pins';
  };
  if(this.rolls.length === 0 && rollValue === 10){
      this.rolls.push(rollValue);
      this.rolls.push(this.pinsLeft());
  }
  else{
    this.rolls.push(rollValue);
  }
};

Frame.prototype.pinsLeft = function(){
  if (this.rolls.length === 0){
    return this.START_PINS;
  } else{
  return this.START_PINS - this.rolls[0];
  };
};

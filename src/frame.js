function Frame(specialFrame){
  specialFrame = specialFrame === undefined ? false : true;
  this.rolls = [];
  this.specialFrame = specialFrame;
  this.START_PINS = 10;
  this.numberOfPinsDown  = 0;
};

Frame.prototype.addRoll = function (rollValue) {
  if(rollValue > this.pinsLeft()) {
    throw 'Value exceeds number of pins';
  };
  this.numberOfPinsDown  += rollValue;
  if(this.specialFrame){
    this.addSpecialRoll(rollValue);
  }
  else{
    this.addNormalRoll(rollValue);
  }
};

Frame.prototype.addNormalRoll = function(rollValue){
  if(this.rolls.length === 0 && rollValue === 10){
      this.rolls.push(rollValue);
      this.rolls.push(0);
  }
  else{
    this.rolls.push(rollValue);
  }
}

Frame.prototype.addSpecialRoll = function(rollValue){
  this.rolls.push(rollValue);
}

Frame.prototype.pinsLeft = function(){
  this.numberOfPinsDown  = this.numberOfPinsDown === 10 ? 0 : this.numberOfPinsDown
  return this.START_PINS - this.numberOfPinsDown;
};

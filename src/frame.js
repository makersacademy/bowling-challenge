function Frame(specialFrame){
  specialFrame = specialFrame === undefined ? false : true;
  this.rolls = [];
  this.specialFrame = specialFrame;
  this.START_PINS = 10;
  this.numberOfPinsDown  = 0;
  this.NORMAL_FRAME_ROLLS = 2;
  this.SPECIAL_FRAME_ROLLS = 3;
}

Frame.prototype.addRoll = function (rollValue) {
  if(rollValue > this.pinsLeft()) {
    throw 'Value exceeds number of pins';
  }
  this.numberOfPinsDown  += rollValue;
  if(this.specialFrame){
    this.addSpecialRoll(rollValue);
  }
  else{
    this.addNormalRoll(rollValue);
  }
}

Frame.prototype.addNormalRoll = function(rollValue){
  if(this.rolls.length === 0 && rollValue === this.START_PINS){
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
  this.numberOfPinsDown  = this.numberOfPinsDown === this.START_PINS ? 0 : this.numberOfPinsDown
  return this.START_PINS - this.numberOfPinsDown;
}

Frame.prototype.maxRolls = function(){
  if(this.specialFrame && (this.rolls[0]+this.rolls[1] >= this.START_PINS)){
    return this.SPECIAL_FRAME_ROLLS;
  } else{
    return this.NORMAL_FRAME_ROLLS;
  }
}

Frame.prototype.nrRollsCompleted = function(){
  return this.rolls.length
}

Frame.prototype.isOver = function(){
  return (this.rolls.length === this.maxRolls());
}

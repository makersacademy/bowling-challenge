// manages a single frame
function Frame() {
  this.rollsComplete = 0;
  this.firstRollPins = 0;
  this.secondRollPins = 0;
  this.bonusRollPins = 0;
  this.bonusRollAllowed = false;
  this.totalPinsDown = 0;
  this.strike = false;
  this.spare = false;
  this.MAXPINS = 10;
  this.MAXROLLS = 2;
}

Frame.prototype.increaseRollNumber = function() {
  if(this.rollsComplete >= this.MAXROLLS) {
    throw `${this.MAXROLLS} rolls maximum.`
  } else {
    this.rollsComplete += 1;
  }
}

Frame.prototype.rollBall = function(pins){
  if((this.firstRollPins + pins) > this.MAXPINS) {
    throw `Max pins per frame is ${this.MAXPINS}`
  } else {
    if(this.rollsComplete === 0) {
      this.firstRollPins = pins;
      this.totalPinsDown += pins;
      this.increaseRollNumber();
      this.isSpecial();
    } else {
      this.secondRollPins = pins;
      this.totalPinsDown += pins;
      this.increaseRollNumber();
      this.isSpecial();
    }

  }
}

Frame.prototype.isSpecial = function(){
  if(this.firstRollPins === 10) {
    this.strike = true;
  } else if((this.firstRollPins + this.secondRollPins) === 10){
    this.spare = true;
  }
}

Frame.prototype.isBonusRollAllowed = function(game){
  if((game.framesComplete === 10) && (this.strike || this.spare)) {
    this.bonusRollAllowed = true;
  } else {
    this.bonusRollAllowed = false;
  }
}

Frame.prototype.rollBonusBall = function(pins){
  if(this.bonusRollAllowed === true) {
    this.bonusRollPins = pins;
  } else {
    throw `Bonus roll is not allowed.`
  }
}

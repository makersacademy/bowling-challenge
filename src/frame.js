function Frame(){
  this._details = {
    pins: null,
    firstScore: null,
    secondScore: null,
  }
}

Frame.prototype.firstBowl = function(pins){
  this.illegalBowl(pins);
  this._details.firstScore = pins;
  this.updateScore(pins);
}

Frame.prototype.secondBowl = function(pins){
  this.illegalBowl(pins);
  this._details.secondScore = pins;
  this.updateScore(pins);
}

Frame.prototype.illegalBowl = function(pins){
  if(pins > 10 || pins + this._details.pins > 10) {
    throw new Error('Error: You cannot hit more than 10 pins.');
  }
}

Frame.prototype.updateScore = function(pins) {
  this._details.pins += pins;
}



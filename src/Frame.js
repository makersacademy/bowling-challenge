function Frame() {
  this.bowls = [];
  this.bowlIndex = 1;
  this.finalFrame = false
  MAX_PINS = 10;
};

Frame.prototype.bowl = function(pins) {
  if(!this.finalFrame && this.bowlIndex > 1) {
    if(this._validBowl(pins)) {
      this._addBowl(pins);
    } else {
      this._invalidBowl();
    };
  } else {
    this._addBowl(pins);
  };
};

Frame.prototype._addBowl = function(pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isAStrike = function() {
  return(this.bowls[0] === MAX_PINS);
};

Frame.prototype.isASpare = function() {
  return(this.standardFrameTotal() === MAX_PINS);
};

Frame.prototype.frameTotal = function() {
  if(!this.isAStrike()) {
    return this.standardFrameTotal()
  } else {
    return MAX_PINS;
  };
};

Frame.prototype.finalFrameTotal = function() {
  if(this.bowlIndex > 3) {
    return(this.standardFrameTotal() + this.bowls[2]);
  }
  else {
    return this.standardFrameTotal()
  };
};

Frame.prototype.standardFrameTotal = function() {
  return this.bowls[0] + this.bowls[1];
};

Frame.prototype.bowlIndexTwo = function() {
  return(this.bowlIndex > 2);
};

Frame.prototype.bowlIndexThree = function() {
  return(this.bowlIndex > 3);
};

Frame.prototype._validBowl = function(pins) {
  return(this.bowls[0] + pins <= MAX_PINS)
};

Frame.prototype._invalidBowl = function(){
  throw Error("This score is invalid. Roll again");
};

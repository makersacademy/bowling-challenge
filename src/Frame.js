function Frame() {
  this.bowls = []
  this.bowlIndex = 1
  MAX_PINS = 10
};

Frame.prototype.bowl = function(pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isAStrike = function() {
  return(this.bowls[0] === MAX_PINS);
};

Frame.prototype.isASpare = function() {
  return(this.bowls[0] + this.bowls[1] === MAX_PINS);
};

Frame.prototype.frameScore = function() {
  if(!this.isAStrike()) {
    return this.bowls[0] + this.bowls[1];
  } else {
    return MAX_PINS;
  };
};

Frame.prototype.finalFrameScore = function() {
  if(this.bowlIndex > 3) {
    return(this.bowls[0] + this.bowls[1] + this.bowls[2]);
  }
  else {
    return this.bowls[0] + this.bowls[1];
  };
};

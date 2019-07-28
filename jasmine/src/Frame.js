function Frame() {
  this.frameScore = 0;
  this.amountOfPinsOne = 0;
  this.amountOfPinsTwo = 0;
};

Frame.prototype.bowlOne = function(pins) {
  this.amountOfPinsOne = pins;
};

Frame.prototype.bowlTwo = function(pins) {
  this.amountOfPinsTwo = pins;
};

Frame.prototype.strike = function(){
  if(this.amountOfPinsOne ===10)
  return true;
}

Frame.prototype.spare = function(){
  if(this.amountOfPinsOne + this.amountOfPinsTwo ===10)
  return true;
}

Frame.prototype.calculate = function(){
  if(this.amountOfPinsOne === 10){
    this.frameScore = 0;
    return 'strike'
  }
  if(this.amountOfPinsOne + this.amountOfPinsTwo === 10){
    this.frameScore = 0;
    return 'spare'
  }
  this.frameScore = this.amountOfPinsOne + this.amountOfPinsTwo
}

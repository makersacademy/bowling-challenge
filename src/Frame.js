function Frame (){
  this.firstThrow = null;
  this.secondThrow = null;
  this.strike = false;
}


Frame.prototype.bowl = function(pins) {
  if (pins > 10) throw '10 pins only!';
  if ((this.firstThrow + pins) > 10)  throw '10 pins only!';
  if (this.firstThrow == null) {
    this.firstThrow = pins;
    if (pins == 10) {
      this.strike = true;
    };
  } else {
    this.secondThrow = pins;
  };
};

Frame.prototype.isSpare = function() {
  var total = this.firstThrow + this.secondThrow;
  return total == 10;
};

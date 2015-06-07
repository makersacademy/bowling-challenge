function Frame (){
  this.go1 = null;
  this.go2 = null;
  this.strike = false;
}


Frame.prototype.bowl = function(pins) {
  if (pins > 10) throw 'Cannot exceed 10 pins';
  if ((this.go1 + pins) > 10)  throw 'Cannot exceed 10 pins';
  if (this.go1 == null) {
    this.go1 = pins;
    if (pins == 10) {
      this.strike = true;
    };
  } else {
    this.go2 = pins;
  };
};

Frame.prototype.isSpare = function() {
  var total = this.go1 + this.go2;
  return total == 10;
};


function Frame(){
  this.throws = [];
  this.START_PINS = 10;
};

Frame.prototype.addThrow = function (throwValue) {
  if(throwValue > this.pinsLeft()) {
    throw 'Value exceeds number of pins';
  };
  this.throws.push(throwValue);
};

Frame.prototype.pinsLeft = function(){
  if (this.throws.length === 0){
    return this.START_PINS;
  } else{
  return this.START_PINS - this.throws[0];
  };
};

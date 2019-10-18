function Scorecard() {
  this.frame = 1;
  this.roll =1;
  this.pins = 0;
  this.total = 0;
}

Scorecard.prototype.frame = function(){
  return this.frame;
};

Scorecard.prototype.pins = function(){
  //this.pins += userinput
  return this.pins;
};


Scorecard.prototype.roll = function(){
  return this.roll;
};
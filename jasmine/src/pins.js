function Pins(){
  this.bowlingPins = [0,1,2,3,4,5,6,7,8,9,10];
};

Array.prototype.random = function (){
  return this[Math.floor((Math.random()*this.length))];
};

Pins.prototype.knockedDownPins = function(){
  return this.bowlingPins.random();
};

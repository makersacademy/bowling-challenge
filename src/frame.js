function Frame() {
  this.frameNumber = 1
  this.pins = 10
  this.bowl1 = 0
  this.bowl2 = 0
}


Frame.prototype.firstBowl = function(){
  return this.bowl1 += Math.floor(Math.random());
};
Frame.prototype.secondBowl = function(){
  return this.bowl2 += Math.floor(Math.random());
};

Frame.prototype.bowlOne = function() {
  return this.bowl1
}

Frame.prototype.bowlTwo = function() {
  return this.bowl2
}
Frame.prototype.frameNumber = function() {
  return this.frameNumber
}

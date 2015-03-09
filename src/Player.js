Player = function(){
  this.pinsLeftInFrame = 10
}

Player.prototype.roll = function() {
  return Math.floor(Math.random() * this.pinsLeftInFrame + 1);
};
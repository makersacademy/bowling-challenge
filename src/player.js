function Player() {
  this.turn = 1
};

Player.prototype.bowl = function(downedPins){
  this.downedPins = downedPins;
}

function Player() {
  this.turn = 0
};

Player.prototype.bowl = function(downedPins){
  this.downedPins = downedPins;
}

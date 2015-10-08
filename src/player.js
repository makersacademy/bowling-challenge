function Player() {
  this.turn = 0
};

Player.prototype.bowl = function(downedPins){
  this.downedPins = downedPins;
  this.updateTurn()
};

Player.prototype.updateTurn = function(){
  this.turn = 1
};

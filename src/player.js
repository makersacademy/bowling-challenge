function Player() {
  this.turn = 0
};

Player.prototype.bowl = function(downedPins){
  this.downedPins = downedPins;
  this.updateTurn()
};

Player.prototype.nextTurn = function(){
  this.turn += 1
};

Player.prototype.resetTurn = function(){
  this.turn = 0
};

Player.prototype.updateTurn = function(){
  if(this.turn == 0){
    this.nextTurn()
  }
  else {
    this.resetTurn()
  }
};

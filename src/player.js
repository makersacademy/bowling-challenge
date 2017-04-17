function Player() {
  this.turn = 0
};

Player.prototype.bowl = function(downedPins){
  this.downedPins = downedPins;
};

Player.prototype.nextTurn = function(){
  this.turn += 1
};

Player.prototype.resetTurn = function(){
  this.turn = 0
};

Player.prototype.updateTurn = function(){
  if(this.turn == 1 || this.isStrike()){
    this.resetTurn()
  }
  else {
    this.nextTurn()
  }
};

Player.prototype.isStrike = function(){
  if(this.downedPins == 10)
    { return true }
  else
    { return false }
};

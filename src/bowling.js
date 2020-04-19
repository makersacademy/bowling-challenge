function Bowling() {
  this.players = [];
  this.currentPlayer = 0;
};

Bowling.prototype.addPlayer = function(name){
  this.players.push(name);
};

Bowling.prototype.getCurrentPlayer = function() {
  return this.players[this.currentPlayer];
}

Bowling.prototype.changeTurn = function() {
  this.currentPlayer++;
};
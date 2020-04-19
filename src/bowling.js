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

Bowling.prototype.playerCount = function() {
  return this.players.length;
}

Bowling.prototype.changeTurn = function() {
  if (this.currentPlayer < this.playerCount()) {
    this.currentPlayer++;
  } else {
    this.currentPlayer = 0;
  }
};
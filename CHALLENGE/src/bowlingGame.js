function Bowling() {

  this.players = [];

}

Bowling.prototype.players = function() {
  return this.players;
};

Bowling.prototype.addPlayer = function(player) {
  this.players.push(player);
};

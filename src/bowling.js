function Bowling() {
  this.players = [];
};

Bowling.prototype.addPlayer = function(name){
  this.players.push(name);
};


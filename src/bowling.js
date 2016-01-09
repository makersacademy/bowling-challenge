function Bowling() {
  this.playerName = 'Player1'
}

Bowling.prototype.setPlayerName = function (name) {
  this.playerName = name;
};

Bowling.prototype.getPlayerName = function () {
  return this.playerName;
};

function Bowling() {
  this.playerName    = 'Player1'
  this.remainingPins = 10;
  this.score         = {};
}

Bowling.prototype.setPlayerName = function (name) {
  this.playerName = name;
};

Bowling.prototype.getPlayerName = function () {
  return this.playerName;
};

Bowling.prototype.getRemainingPins = function () {
  return this.remainingPins;
};

Bowling.prototype.startFrame = function (number) {
  this.score[number] = [];
};

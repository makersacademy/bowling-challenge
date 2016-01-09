function Bowling() {
  this.playerName    = 'Player1'
  this.remainingPins = 10;
  this.score         = {};
  this.knockedPins   = 0;
}

Bowling.prototype.setPlayerName = function (name) {
  this.playerName = name;
};

Bowling.prototype.getPlayerName = function () {
  return this.playerName;
};

Bowling.prototype.startFrame = function (number) {
  this.score[number] = [];
};

Bowling.prototype.rollBall = function () {
  this.knockedPins = Math.floor(Math.random() * (this.remainingPins + 1));
  this.remainingPins -= this.knockedPins;
};

Bowling.prototype.getKnockedPins = function () {
  return this.knockedPins;
};

Bowling.prototype.getRemainingPins = function () {
  return this.remainingPins;
};

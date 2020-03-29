function Game() {

  this.players = [];
  this.frame = 1;
  this.playerIdx = 0;
  this.currentPlayer = "";
  // this.currentPlayer = this.players[this.playerIdx].name;
  this.roll = 1;
  this.inPlay = true;
};

Game.prototype.updatePlayersList = function (player) {
  this.players.push({ name: player, scoreboard: new ScoreBoard });
  this.players[this.players.length - 1].scoreboard.newBoard();
};

Game.prototype.turn = function () {
  this._updateRoll();
  this._updatePlayer();
  this._updateFrame();
  this.updateCurrentPlayer();
};

Game.prototype.updateCurrentPlayer = function () {
  this.currentPlayer = this.players[this.playerIdx].name;
};

Game.prototype._updateRoll = function () {
  this.roll = this.roll % 2 + 1;
};

Game.prototype._updatePlayer = function () {
  if (this.roll == 1) {
    this.playerIdx = (this.playerIdx + 1) % this.players.length;
    // this.currentPlayer = this.players[(this.playerIdx + 1) % this.players.length];
  };
};

Game.prototype._updateFrame = function () {
  if (this.roll == 1 && this.playerIdx == 0) {
    this.frame += 1;
  };
};

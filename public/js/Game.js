function Game() {

  this.players = [];
  this.frame = 1;
  this.playerIdx = 0;
  this.currentPlayer = "";
  // this.currentPlayer = this.players[this.playerIdx].name;
  this.roll = 1;
  this.specialTurn = false;
  this.inPlay = true;
};

Game.prototype.updatePlayersList = function (player) {
  this.players.push({ name: player, scoreboard: new ScoreBoard, finished: false });
  this.players[this.players.length - 1].scoreboard.newBoard();
};

Game.prototype.turn = function () {
  if (!this.specialTurn) {
    this._updateRoll();
    this._updatePlayer();
    this._updateFrame();
    this.updateCurrentPlayer();
  };
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
  this.frame = Math.min(this.frame, 10);
};

Game.prototype.isOver = function () {
  for (i=0; i < this.players.length; i++) {
    if (!this.players[i].finished) {
      return false;
    };
  };
  return true;
};

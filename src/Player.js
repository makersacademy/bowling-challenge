function Player() {
  this._playerLog = []
}

Player.prototype.playerLog = function () {
  return this._playerLog;
};

Player.prototype.lastBowl = function () {
  return this.playerLog()[this.playerLog().length-1]
};

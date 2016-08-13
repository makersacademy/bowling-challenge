function Game() {
  this.table = new ScoreTable();
  this.table._setNewFrame(0);
}

Game.prototype = {
  play: function () {
    var pinsKnocked = this._roll(this.table.getPinsLeft());
    this.table.receiveScore(pinsKnocked);
    return pinsKnocked;
  },

  _roll: function (pins) {
    return Math.floor(Math.random(pins));
  },
};

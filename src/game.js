function Game() {
    this.scoreCard = [];
    this.currentFrame = 1;
    this.gameStatus = 'ongoing';
}

Game.prototype.newGame = function () {
    for (var i = 0; i < 12; i ++) {
      this.scoreCard[i] = [];
  };
};

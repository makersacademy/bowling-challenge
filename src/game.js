function Game() {
    this.scoreCard = [];
    this.currentFrame = 1;
    this.gameStatus = 'ongoing';
    this.currentThrow = 'first';

}

Game.prototype.newGame = function () {
    for (var i = 0; i < 12; i ++) {
      this.scoreCard[i] = [];
  };
};

Game.prototype.nextTurn = function () {
  this.currentThrow = 'first';
  this.currentFrame ++;
};

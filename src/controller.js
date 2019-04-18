function Controller() {
  this.game = new Game();
}

Controller.prototype = {

  addBall: function(score) {
    this.game.recordBall(score);
    this.game.checkEndOfGame();
    this.game.addBonusScores();
  },

  totalScore: function() {
    return this.game.calculateTotal();
  },

  isGameOver: function() {
    return this.game.isComplete();
  },

  frameTotals: function() {
    return this.game.frameList.map(function(frame) {
      return frame.total;
    });
  }

}

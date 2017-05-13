function ScoreBoard() {
}

function add(score1, score2) {
    return score1 + score2;
}

ScoreBoard.prototype.updateScores = function(game) {
  this.frame1 = game.game.frame1.reduce(add, 0);
};

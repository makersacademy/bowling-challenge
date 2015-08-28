var BowlingGame = function() {

  this.newGame = {};
  this.score = 0;

};

BowlingGame.prototype.currentScore = function() {
  newGame = this.newGame;
  for (i = 1; i <= Object.keys(game.newGame).length; i ++) {
    this.score += newGame[i].reduce(function(a,b) {return a + b;});
  };
  return this.score;
};

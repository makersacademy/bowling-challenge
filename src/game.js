function Game() {}

Game.prototype.addScore = function addScore( score ) {
  console.log( score );
};

Game.prototype.currentScore = function currentScore() {
  return 0;
};

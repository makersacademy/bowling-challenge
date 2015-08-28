var BowlingGame = function() {

  this.newGame = {1: [null,null], 
                  2: [null,null],
                  3: [null,null],
                  4: [null,null],
                  5: [null,null],
                  6: [null,null],
                  7: [null,null],
                  8: [null,null], 
                  9: [null,null],
                  10: [null,null]};

  this.score = 0;

};

BowlingGame.prototype.currentScore = function() {
  newGame = this.newGame;
  for (i = 1; i <= Object.keys(game.newGame).length; i ++) {
    this.score += newGame[i].reduce(function(a,b) {return a + b;});
  };
  return this.score;
};

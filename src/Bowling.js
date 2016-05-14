function BowlingGame(){
  this._score = 0;
}

var game = new BowlingGame();


BowlingGame.prototype.currentScore = function(){
  return this._score;
};

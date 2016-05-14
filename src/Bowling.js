function BowlingGame(){
  this._score = 0;
  this._frame = 1;

}

var game = new BowlingGame();


BowlingGame.prototype.currentScore = function(){
  return this._score;
};

BowlingGame.prototype.currentFrame = function(){
  return this._frame;
};

BowlingGame.prototype.nextFrame = function(){
  this._frame ++;
};

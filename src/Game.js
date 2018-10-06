function Game (){
  this._totalScore = 0;
  this._framesLeft = 10;
  this._doubleFirstRollNextRound = false;
  this._doubleBothRollsNextRound = false;
};

Game.prototype.rollBall = function(){
  return new Frame();
};

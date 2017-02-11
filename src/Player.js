function Player(){
  this._frameScore = 0
};

Player.prototype.throwBall = function(){
  this._frameScore += this.pinsKnocked();
};

Player.prototype.pinsKnocked = function(){
  return Math.floor(Math.random() * 10);
}

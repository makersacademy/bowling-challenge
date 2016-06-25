function Game() {
  this.frame = 1;
  this.score = 0;
  this.pinsStruck = 0;
  this._countMove = 1;
  this.MAXIMUM_FRAME =10;
  this.pinRemain = 0;
  this.MAXPINS = 10;
}

Game.prototype.gameScore = function(value) {
  return this.score;
};

Game.prototype.currentFrame = function() {
  return Math.floor(this.frame);
};

Game.prototype.play = function(){
  this.pinsStruck = Math.random() * (this.pinRemain + 1);
  this._countMove++;
  return this.pinsStruck;
};

Game.prototype.increaseFrame = function(){
  if(this.frame < 10)
  {
    if(this.countMove === 2)
    {
      this.countMove = 0;
      this.frame++;
    }
  }
  else {
    return "GAME OVER! Press play to start new game";
  }
  return this.frame;
};

Game.prototype.increaseScore = function(){
  if(this.pinsStruck === this.MAXPINS)
  {
    this.score = this.score + this.MAXPINS;
    this.pinRemain = this.MAXPINS;
  }
  else {
    this.score = this.score + this.pinsStruck;
    this.pinRemain = this.MAXPINS - this.pinsStruck;
  }
  return this.score;
};

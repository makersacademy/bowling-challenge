function Game() {
  this.score = 0;
  this.frame = 1;
  this.hitPins = 0;
  this.DEFAULT_PINS = 10;
  this.countMove = 1;
  this.MAXIMUM_PINS = 10;
  this.MAXIMUM_FRAME = 10;
}

Game.prototype.play = function() {
  this.hitPins = Math.floor(Math.random() * (this.DEFAULT_PINS + 1));
};

Game.prototype.gameScore = function() {
  return this.score;
};

Game.prototype.currentFrame = function() {
  return this.frame;
};

Game.prototype.hitPins = function() {
  return this.hitPins;
};

Game.prototype.updateMove = function() {
  if(this.frame < 10)
  {
    if(this.countMove === 1)
    {
      this.countMove = 2;
    } else
    {
      this.countMove =1;
      this.frame++;
    }
  }
}

function Game() {
  this.score = 0;
  this.frame = 1;
  this.hitPins = 0;
  this.DEFAULT_PINS = 10;
  this.countRoll = 1;
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
  return Math.floor(this.frame);
};

Game.prototype.hitPins = function() {
  return this.hitPins;
};

Game.prototype.updateRoll = function() {
  if(this.frame < 10)
  {
    if(this.countRoll === 1)
    {
      this.countRoll = 2;
    } else
    {
      this.countRoll =1;
      this.frame++;
    }
  } else
  {
    this.frame =1;
  }
};

Game.prototype.getRollNumber = function() {
  return this.countRoll;
};

Game.prototype.pinsKnockDown = function() {
  return this.hitPins;
};

function Game() {
  this.frame = 1;
  this.score = 0;
  this.pinsStruck = 0;
  this.countMove = 1;
  this.pinRemain = 10;
  this.MAXPINS = 10;
  this.MAXIMUM_FRAME =10;
}

Game.prototype.play = function(){
  this.pinsStruck = Math.floor(Math.random() * (this.pinRemain + 1));
  console.log('Pins dropped: ' + this.pinsStruck);
  this.updateMove();
  console.log('Moves done : ' + this._countMove);
  this.increaseScore();
  console.log('score  = : ' + this.score);
};

Game.prototype.updateMove = function(){
  if(this.frame < 10)
  {
    if(this.countMove === 1)
    {
      this.countMove = 2;
    } else {
      this.countMove = 1;
      this.frame++;
    }
  }
  else {
    this.frame = 1;
  }
}

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

Game.prototype.knockedDownPins = function(){
  return this.pinsStruck;
};

Game.prototype.getMoves = function() {
  return this.countMove;
};

Game.prototype.gameScore = function(value) {
  return this.score;
};

Game.prototype.pinStruck = function() {
  return this.pinsStruck;
};

Game.prototype.currentFrame = function() {
  return Math.floor(this.frame);
};

Game.prototype.resetGameNew = function() {
  this.frame = 1;
  this.score = 0;
  this.pinsStruck = 0;
  this.countMove = 1;
  this.pinRemain = 10;
  this.MAXPINS = 10;
  this.MAXIMUM_FRAME =10;
};

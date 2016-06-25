function Game() {
  this.frame = 1;
  this.score = 0;
}

Game.prototype.gameScore = function(value) {
  return this.score;
};

Game.prototype.currentFrame = function() {
  return Math.floor(this.frame);
};

Game.prototype.play = function(){
  var pinsStruck = Math.floor(Math.random() * (10 + 1));
  return pinsStruck;
};

Game.prototype.increaseFrame = function(){
  if(this.frame < 10)
  {
    this.frame += 0.5;
  }
  else {
    this.frame = 1;
    return this.frame;
  }
};

function Game(){
  this.frame = new Frame();
  this.NO_OF_ROUNDS = 10;
  this.MAX_BALLS = 2;
  this.ball = this.MAX_BALLS;
  this.round = 1;
  this.score = 0;
}

Game.prototype.NO_OF_ROUNDS = function(){ return this.NO_OF_ROUNDS;}

Game.prototype.round = function(){ return this.round; }

Game.prototype.roll = function(){
  this.ball -= 1;
  this.recordScore();
  if(this.ball === 0){
    this.frame = new Frame();
    this.ball = this.MAX_BALLS;
    this.round += 1
  }
}
Game.prototype._noOfPins = function(){ return this.frame.pins;}

Game.prototype.recordScore = function(){
  points = getRandomInt(0,(this.frame.pins + 1));
  this.frame.removePins(points);
  this.score+= points;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

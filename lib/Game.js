function Game(){
  this.frame = new Frame();
  this.NO_OF_ROUNDS = 10;
  this.MAX_BALLS = 2;
  this.ball = this.MAX_BALLS;
  this.round = 1;
  this.score = 0;
  this.isStrike = false;
}

Game.prototype.NO_OF_ROUNDS = function(){ return this.NO_OF_ROUNDS;}

Game.prototype.round = function(){ return this.round; }

Game.prototype.nextRound = function() {
  this.frame = new Frame();
  this.ball = this.MAX_BALLS;
  this.round+=1;
}

Game.prototype.ballThrown = function(){
  this.ball -= 1;
  this.recordScore();
}

Game.prototype.roll = function(){
  this.ballThrown();
  if(this.ball === 0){
    if(this.round === 10){ return "Your final score is " +this.score+ "."; }
    this.nextRound();
    this.isStrike = false;
  }
}

Game.prototype._noOfPins = function(){ return this.frame.pins;}

Game.prototype.recordScore = function(){
  var points = this.getRandomInt(0,(this.frame.pins + 1));
  if(points == 10){
    this.nextRound();
    this.isStrike = true;
  }
  else{
  this.frame.removePins(points);
  this.score+= points;
  if(this.isStrike) { this.score+=points; }
  }
}

Game.prototype.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

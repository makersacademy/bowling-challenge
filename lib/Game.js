function Game(){
  this.NO_OF_ROUNDS = 10;
  this.MAX_BALLS = 2;
  this.ball = this.MAX_BALLS;
  this.round = 1;
}

Game.prototype.NO_OF_ROUNDS = function(){ return this.NO_OF_ROUNDS;}

Game.prototype.round = function(){ return this.round; }

Game.prototype.roll = function(){
  this.ball -= 1;
  if(this.ball === 0){  
    this.ball = this.MAX_BALLS;
    this.round += 1
  }
}

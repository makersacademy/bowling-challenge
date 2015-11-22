function Game(){
  this.score = 0;
  this.pointsTipe = 'strike';
  this.MAXPOINTS = 10;
  this.bonusPoints = 0;
  this.scoreFrame = 0;
}

Game.prototype.firstTurn = function(pointsTipe){
  this.launchBall(pointsTipe);
}

Game.prototype.launchBall = function(pointsTipe){
  if ( pointsTipe === 'strike'){
    this.strike();
    this.launchBall('bonus');
    this.launchBall('bonus');
    this.score += this.scoreFrame;
    this.scoreFrame = 0;
  } else if (pointsTipe === 'bonus') {
    this.bonus();
  }
}

Game.prototype.strike = function(){
  this.scoreFrame += 10;
}

Game.prototype.bonus = function(){
  this.bonusPoints += 10;
  this.scoreFrame += this.bonusPoints;
  this.bonusPoints = 0;
}

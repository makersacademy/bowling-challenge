function Game(){
  this.score = 0;
  this.MAXPOINTS = 10;
  this.bonusPoints = 0;
  this.scoreFrame = 0;
  this.bowlTurn = 0;
  this.frame = 0;
  this.turnScore = 0;
  this.sparePoints = 0;
  this.TOTALFRAME = 10;
}

Game.prototype.turn = function(points){
  if (this.frame >= this.TOTALFRAME) {
    return;
  } else if (this.bowlTurn === 0){
    this.firstRoll(points);
  } else {
    this.secondRoll(points);
  }
    console.log('End of the game')
}

Game.prototype.firstRoll = function(points){
  this.firstRollCalcStrike(points);
  this.firstRollCalcNormalPoints(points);
}

Game.prototype.secondRoll = function(points){
  this.turnScore += points;
  this.secondRollSpare();
  this.secondRollNormalPoints();
  this.endFrame();
}

Game.prototype.bonusRoll = function(points) {
  this.bonusPoints += 10;
  this.scoreFrame += this.bonusPoints;
  this.bonusPoints = 0;
}

Game.prototype.firstRollCalcStrike = function(points){
  if ( points === this.MAXPOINTS ){
    this.strike();
    this.bonusRoll(10);
    this.bonusRoll(10);
    this.score += this.scoreFrame;
    this.scoreFrame = 0;
  }
}

Game.prototype.calcBonus = function(points){
  if (points === 'bonus') {
    this.bonus();
  }
}

Game.prototype.firstRollCalcNormalPoints = function(points){
  if (points < this.MAXPOINTS ){
    this.firstRollCalcSpare(points);
    this.turnScore += points;
    this.bowlTurn += 1
  }
}

Game.prototype.firstRollCalcSpare = function(points){
  if (this.sparePoints !== 0){
    this.score += (this.sparePoints + points);
    this.sparePoints = 0;
  }
}

Game.prototype.secondRollSpare = function(){
  if (this.turnScore === this.MAXPOINTS){
    this.sparePoints = this.turnScore;
  }
}

Game.prototype.secondRollNormalPoints = function(){
  if (this.turnScore < this.MAXPOINTS ){
    this.score += this.turnScore;
  }
}

Game.prototype.strike = function(){
  this.scoreFrame += this.MAXPOINTS;
  this.frame += 1;
}

Game.prototype.endFrame = function(){
  this.turnScore = 0;
  this.bowlTurn = 0;
  this.frame += 1;
}

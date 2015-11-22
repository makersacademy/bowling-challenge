function Game(){
  this.score = 0;
  this.MAXPOINTS = 10;
  this.bonusPoints = 0;
  this.scoreFrame = 0;
  this.bowlTurn = 0;
  this.frame = 0;
  this.turnPoints = 0;
  this.sparePoints = 0;
  this.TOTALFRAME = 10;
}

Game.prototype.turn = function(points){
  if (this.bowlTurn === 0){
    this.firstRoll(points);
  } else {
    this.secondRoll(points);
  }
}

Game.prototype.firstRoll = function(points){
  this.calcStrike(points);
  this.calcBonus(points);
  if (points < this.MAXPOINTS ){
    if (this.sparePoints !== 0){
      this.score += (this.sparePoints + points);
      this.sparePoints = 0;
      console.log(this.score);
    }
    this.turnPoints += points;
    this.bowlTurn += 1
  }
}

Game.prototype.secondRoll = function(points){
  this.turnPoints += points;
  if (this.turnPoints === this.MAXPOINTS){
    this.sparePoints = this.turnPoints;
  } else if (this.turnPoints < this.MAXPOINTS ){
    this.score += this.turnPoints;
  }
  this.turnPoints = 0;
  this.frame += 1;
  this.bowlTurn = 0;
}

Game.prototype.calcStrike = function(points){
  if ( points === this.MAXPOINTS ){
    this.strike();
    this.firstRoll('bonus');
    this.firstRoll('bonus');
    this.score += this.scoreFrame;
    this.scoreFrame = 0;
  }
}

Game.prototype.calcBonus = function(points){
  if (points === 'bonus') {
    this.bonus();
  }
}

Game.prototype.strike = function(){
  this.scoreFrame += this.MAXPOINTS;
  this.frame += 1;
}

Game.prototype.bonus = function(){
  this.bonusPoints += 10;
  this.scoreFrame += this.bonusPoints;
  this.bonusPoints = 0;
}

Game.prototype.endTurn = function(){
  this.turnPoints = 0;
  this.bowlTurn = 0;
  this.frame += 1;
}

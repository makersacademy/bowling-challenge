function Game(){
  this.score = 0;
  this.scoreArray = [];
  this.MAXPOINTS = 10;
  this.bonusPoints = 0;
  this.scoreFrame = 0;
  this.bowlTurn = 0;
  this.frame = 1;
  this.turnScore = 0;
  this.sparePoints = 0;
  this.TOTALFRAME = 11;
  this.strikeBowl = false;
  this.bonusPointsCount = 0;
}

Game.prototype.turn = function(points){
  this.bonusStrike(points);
  if (this.frame >= this.TOTALFRAME) {
    throw("End of the game");
  } else if (this.bowlTurn === 0){
    this.firstRoll(points);
  } else {
    this.secondRoll(points);
  }
}

Game.prototype.bonusStrike = function(points){
  if ( this.scoreArray[this.frame - 3] === this.MAXPOINTS ){
    console.log('sei ricca');
    this.scoreArray[this.frame - 3] += this.bonusPoints;
    if(this.scoreArray[this.frame - 2] === this.MAXPOINTS ){
      this.bonusPoints = this.MAXPOINTS
    } else {
      this.bonusPoints = 0;
    }
  };
  if(this.bonusPointsCount !== 0){
    this.bonusPoints += points;
    this.bonusPointsCount -= 1;
  };
}

Game.prototype.firstRoll = function(points){
  this.firstRollCalcStrike(points);
  this.firstRollCalcNormalPoints(points);
}

Game.prototype.secondRoll = function(points){
  this.turnScore += points;
  this.secondRollSpare();
  this.secondRollNormalPoints();
  this.scoreArray.push(this.turnScore);
  this.endFrame();
}

Game.prototype.firstRollCalcStrike = function(points){
  if ( points === this.MAXPOINTS ){
    this.bonusPointsCount += 2
    this.strikeBowl = true;
    this.strike();
    this.score += this.scoreFrame;
    this.scoreFrame = 0;
    this.scoreArray.push(points);
  }
}

Game.prototype.firstRollCalcNormalPoints = function(points){
  if (points < this.MAXPOINTS ){
    this.strikeBowl = false;
    this.consStrike = 0;
    this.firstRollCalcSpare(points);
    this.turnScore += points;
    this.bowlTurn += 1
  }
}

Game.prototype.firstRollCalcSpare = function(points){
  if (this.sparePoints !== 0){
    this.scoreArray[this.frame - 2] += (this.sparePoints + points);
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

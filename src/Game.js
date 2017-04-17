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
  this.TOTALFRAME = 10;
  this.strikeBowl = false;
  this.spare = false;
  this.lastFrameBonusPoints = 0;
  this.lastFrameRols = 0;
  this.bonusPointsCount = 0;
  this.strikePoints = 0;
}

Game.prototype.calcScore = function(){
  var total = 0;
  for(var i in this.scoreArray) {
    if(this.scoreArray[i] !== true ){
      total += this.scoreArray[i];
    }
  }
  this.score = total;
};

Game.prototype.turn = function(points){
  if(this.lastFrameRols !== 0){
    this.bonusRollFrame(points);
  };
  if ( this.frame >= this.TOTALFRAME + 1 && this.lastFrameRols === 0 ){
    this.calcScore();
    return "End of the game";
  };
  this.bonusStrike(points);
  if (this.frame < 11){
    if (this.bowlTurn === 0 ){
      this.firstRoll(points);
    } else {
      this.secondRoll(points);
    };
  };
  this.calcScore();
}

Game.prototype.bonusStrike = function(points){
  if(this.bonusPointsCount !== 0){
    this.bonusPoints += points;
    this.consecutiveStrike(points);
    this.nonConsecutiveStrike();
  };
}

Game.prototype.consecutiveStrike = function(points){
  if ( this.scoreArray[this.frame - 3] === true ){
    this.scoreArray[this.frame - 3] = this.bonusPoints;
    this.bonusPointsCount -= 1;
    if( this.scoreArray[this.frame - 2] === true ){
      this.scoreArray[this.frame - 3] += this.strikePoints;
      this.bonusPoints = points;
    } else {
      this.bonusPoints = 0;
    }
  };
};

Game.prototype.nonConsecutiveStrike = function(){
  if (this.scoreArray[this.frame - 2] && this.bowlTurn === 1){
    this.scoreArray[this.frame - 2] =  this.bonusPoints + this.strikePoints;
    this.bonusPoints = 0;
    this.bonusPointsCount -= 1;
  };
};

Game.prototype.firstRoll = function(points){
  this.firstRollCalcNormalPoints(points);
  this.firstRollCalcStrike(points);
}

Game.prototype.secondRoll = function(points){
  this.turnScore += points;
  this.secondRollSpare();
  this.secondRollNormalPoints();
  this.endFrame();
}

Game.prototype.firstRollCalcStrike = function(points){
  if ( points === this.MAXPOINTS ){
    if (this.frame === 10){
      this.lastFrameRols = 2;
    };
    this.firstRollCalcSpare(points);
    this.bonusPointsCount += 1;
    this.strikeBowl = true;
    this.strike();
    this.scoreArray.push(true);
    this.strikePoints = this.scoreFrame
    this.scoreFrame = 0;
  }
}

Game.prototype.firstRollCalcNormalPoints = function(points){
  if (points < this.MAXPOINTS ){
    this.strikeBowl = false;
    this.consStrike = 0;
    this.firstRollCalcSpare(points);
    this.turnScore += points;
    this.bowlTurn += 1;
  }
}

Game.prototype.firstRollCalcSpare = function(points){
  if (this.sparePoints !== 0){
    this.scoreArray.push(this.sparePoints + points);
    this.sparePoints = 0;
    this.spare = false;
  }
}

Game.prototype.secondRollSpare = function(){
  if (this.turnScore === this.MAXPOINTS){
    this.sparePoints = this.turnScore;
    this.spare = true;
    if(this.frame === 10){
      this.lastFrameRols = 1;
    }
  }
}

Game.prototype.secondRollNormalPoints = function(){
  if (this.turnScore < this.MAXPOINTS ){
    this.scoreArray.push(this.turnScore);
  }
}

Game.prototype.strike = function(){
  this.scoreFrame += this.MAXPOINTS;
  this.frame += 1;
}

Game.prototype.bonusRollFrame = function(points){
  this.firstRollCalcSpare(points);
  this.lastFrameRols -= 1;
  if(this.scoreArray[this.frame - 2] === true && this.lastFrameRols === 0){
    this.bonusPoints += (this.strikePoints + points);
    this.scoreArray[this.frame - 2] = this.bonusPoints;
  };
}

Game.prototype.endFrame = function(){
  this.turnScore = 0;
  this.bowlTurn = 0;
  this.frame += 1;
}

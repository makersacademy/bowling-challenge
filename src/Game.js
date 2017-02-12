function Game(scoreboard = new Scoreboard()){
  this.max_rolls = 2;

  this._frameScore = 0;
  this._rollTracker = 2;
  this._frame = 1;
  this._totalScore = 0;
  this.frameRolls = [];
  this.scoreboard = scoreboard;
  this.bonusCounter = 0;
  this.bonusScore = 0;
}

Game.prototype.updateFrameScore = function(pins){
  if (this.isStrike(pins)){
    this.strikeLogic(pins);
  } else if (this.isSpare(pins)) {
    this.spareLogic(pins);
  } else {
  this.bonus(pins);
  this._frameScore += pins;
  this.frameRolls.push(pins);
  this.updateRollTracker();
  }
}

Game.prototype.updateRollTracker = function(){
  this._rollTracker -= 1;
  console.log(this._rollTracker)
  if (this._rollTracker === 0){
    this.updateFrame();
  }
}

Game.prototype.updateFrame = function(){
    this.updateTotalScore();
    this.updateScoreBoard();
    this.resetFrame();
    if(this.isEnd()){
      return "Game Over";
    }
}

Game.prototype.updateTotalScore = function(){
  this._totalScore += (this._frameScore + this.bonusScore);
}

Game.prototype.strikeLogic = function(pins){
  this._frameScore += pins;
  this.frameRolls.push(pins);
  if(this.isFrameTen()){
    this.frameTenBonus();
  } else {
    this.frameRolls.push(0);
    this.bonusCounter = 2;
    this.updateFrame();
  }
}

Game.prototype.spareLogic = function(pins){
  this._frameScore += pins;
  this.frameRolls.push(pins);
  if(this.isFrameTen()){
    this.frameTenBonus();
  } else {
    this.spareBonusUpdate();
    this.updateFrame();
  }
}

Game.prototype.updateScoreBoard = function(){
  if(this.bonusScore > 0){
    this.scoreboard["Frame" + (this._frame -1)] = [[10,0], (10 + this.bonusScore)]
  }
  this.scoreboard["Frame" + this._frame] = [this.frameRolls, this._frameScore];
}

Game.prototype.bonus = function(pins){
  if (this.bonusCounter > 0){
    this.bonusScore += pins;
    this.bonusCounter -= 1;
  };
}

Game.prototype.spareBonusUpdate = function(){
    this.bonusCounter = 1;
}

Game.prototype.frameTenBonus = function(){
  this.max_rolls = 3;
  this.rollTracker = this.max_rolls - this.frameRolls.length;
  if (this._rollTracker === 0){
    this.updateFrame();
  }
}

Game.prototype.resetFrame = function(){
  this.frameRolls = [];
  this._frameScore = 0;
  this.bonusScore = 0;
  this._frame += 1;
  this._rollTracker = this.max_rolls;
}


Game.prototype.isEnd = function(){
  if (this._frame > 10){
    return true;
  }
}

Game.prototype.isFrameTen = function(){
  if (this._frame === 10){
    return true;
  }
}

Game.prototype.isStrike = function(pins){
  if(pins === 10){
    return true;
  }
}

Game.prototype.isSpare = function(pins){
  if((this._frameScore + pins) === 10){
    return true;
  };
}

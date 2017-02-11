function Game(scoreboard = new Scoreboard()){
  this._frameScore = 0;
  this._rollTracker = 1;
  this._frame = 1;
  this._totalScore = 0;
  this.frameRolls = [];
  this.scoreboard = scoreboard;
  this.bonusCounter = 0;
  this.bonusScore = 0;
}



Game.prototype.updateFrameScore = function(pins){
  console.log(this._frame);
  if (pins === 10){
    this.strikeLogic(pins);
  } else {
  this.bonus(pins);
  this._frameScore += pins;
  this.frameRolls.push(pins);
  this.updateRollTracker();
  }
}

Game.prototype.updateRollTracker = function(){
  this._rollTracker += 1;
  if (this._rollTracker > 2){
    this.updateFrame();
  }
}

Game.prototype.updateFrame = function(){
    this.updateTotalScore();
    this.updateScoreBoard();
    this.frameRolls = [];
    this._frameScore = 0;
    this.bonusScore = 0;
    this._frame += 1;
    this._rollTracker = 1;
}

Game.prototype.updateTotalScore = function(){
  this._totalScore += (this._frameScore + this.bonusScore);
}

Game.prototype.strikeLogic = function(pins){
  this._frameScore += pins;
  this.frameRolls.push(pins);
  this.frameRolls.push(0);
  this.bonusCounter += 2;
  this.updateFrame();
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

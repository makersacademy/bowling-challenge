function Game(){
  this._frameScore = 0;
  this._rollTracker = 1;
  this._frame = 1;
  this._totalScore = 0;
}

Game.prototype.updateFrameScore = function(pins){
  this._frameScore += pins;
  this.updateRollTracker();
}

Game.prototype.updateRollTracker = function(){
  this._rollTracker += 1;
  this.updateFrame();
}

Game.prototype.updateFrame = function(){
  if (this._rollTracker > 2){
    this.updateTotalScore();
    this._frameScore = 0
    this._frame += 1;
    this._rollTracker = 1;
  }
}

Game.prototype.updateTotalScore = function(){
  this._totalScore += this._frameScore;
}

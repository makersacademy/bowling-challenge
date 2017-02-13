var that = this;

function Game(scorecalc = new Scorecalc()){
  that = this;
  that.max_rolls = 2;
  that._rollTracker = 2;
  that._frame = 1;
  that.frameRolls = [];
  that.scorecalc = scorecalc;
  that.bonusCounter = 0;
}

Game.prototype.updateFrameScore = function(pins){
  if (that.isStrike(pins)){
    that.strikeLogic(pins);
  } else if (that.isSpare(pins)) {
    that.spareLogic(pins);
  } else {
  that.bonus(pins);
  that.frameRolls.push(pins);
  that.updateRollTracker();
  }
}

Game.prototype.updateRollTracker = function(){
  that._rollTracker -= 1;
  if (that._rollTracker === 0){

    that.updateFrame();
  }
}

Game.prototype.updateFrame = function(){
    that.scorecalc.updateScoreBoard(that._frame, that.frameRolls);
    that.scorecalc.updateTotalScore(that._frame);
    that.resetFrame();
    if(that.isEnd()){
      return "Game Over";
    }
}

Game.prototype.strikeLogic = function(pins){
  that.frameRolls.push(pins);
  if(that.isFrameTen()){
    that.frameTenBonus();
  } else {
    that.frameRolls.push(0);
    that.bonusCounter = 2;
    that.updateFrame();
  }
}

Game.prototype.spareLogic = function(pins){
  that.frameRolls.push(pins);
  if(that.isFrameTen()){
    that.frameTenBonus();
  } else {
    that.spareBonusUpdate();
    that.updateFrame();
  }
}

Game.prototype.bonus = function(pins){
  if (that.bonusCounter > 0){
    that.scorecalc.addBonus(pins);
    that.bonusCounter -= 1;
  }
}

Game.prototype.spareBonusUpdate = function(){
    that.bonusCounter = 1;
}

Game.prototype.frameTenBonus = function(){
  that.max_rolls = 3;
  that.rollTracker = that.max_rolls - that.frameRolls.length;
  if (that._rollTracker === 0){
    that.updateFrame();
  }
}

Game.prototype.resetFrame = function(){
  that.frameRolls = [];
  that.scorecalc.resetBonus();
  that._frame += 1;
  that._rollTracker = that.max_rolls;
}


Game.prototype.isEnd = function(){
  if (that._frame > 10){
    return true;
  }
}

Game.prototype.isFrameTen = function(){
  if (that._frame === 10){
    return true;
  }
}

Game.prototype.isStrike = function(pins){
  if(pins === 10){
    return true;
  }
}

Game.prototype.isSpare = function(pins){
  if((pins + that.frameRolls[0]) === 10){
    return true;
  }
}

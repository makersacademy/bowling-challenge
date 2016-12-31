function Game() {
  'use strict';
  this.scores  = []; //store [[ro11-1, roll-2, bonus]]
  this.frameScores = []; //store  [ro11-1, roll-2]
  this.STRIKE_PINS  = 10;
  this.roll  = 1;
  this.frame = 1;
  this.finish = false;
  this.thirdRoll = false;
}

Game.prototype.passScore = function(user_input){
  var pins = Number(user_input)
  if( this.frameScores.length === 0 ){
    this.frameScores.push(pins)
    this.scores.push(this.frameScores)
  } else {
    this.frameScores.push(pins)
    this.scores[ this.frame - 1 ] = this.frameScores
  }
};

Game.prototype.passStrikeSecondRollScore = function(){
  this.frameScores.push(0)
  this.scores[ this.frame - 1 ] = this.frameScores
}

Game.prototype.increaseRoll = function(){
  this.roll ++
};

Game.prototype.changeRoll = function(){
  if( this.roll === 1 ){ this.increaseRoll()
  } else { this.roll = 1 }
};

Game.prototype.increaseFrame = function(){
  if( this.frame < 10 && this.frameScores.length === 2 ){ return this.frame ++ }
};

Game.prototype.clearFrameScores = function(){
  if( this.frameScores.length === 2 ){ this.frameScores = [] }
};

Game.prototype.isGameFinish = function(){
  if( this.roll === 2 && this.thirdRoll === false ){
    return true
  } else if( this.roll === 3 ){
    return true
  } else {
    return false
  }
};

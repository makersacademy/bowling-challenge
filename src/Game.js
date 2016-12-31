function Game() {
  'use strict';
  this.scores  = []; //store [[ro11-1, roll-2, bonus]]
  this.frameScores = []; //store  [ro11-1, roll-2]
  this.strikeBonus = []; //store  [ro11-1, roll-2]
  this.STRIKE_PINS  = 10;
  this.roll  = 1;
  this.frame = 1;
  this.finish = false;
  //flags for only frame 10
  this.strike = false;
  this.spare  = false;
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

Game.prototype.sumFrameScores = function(){
  var i;
  var sum = 0;
  for (i=0; i<2; i++){ sum = sum + this.frameScores[i] }
  return sum
};

Game.prototype.sumGameScores = function(){
  var i;
  var j;
  var sum = 0;

  for (i=0; i<this.scores.length; i++){
    for (j=0; j<this.scores[i].length; j++){
       sum += this.scores[i][j]
    }
  }
  return sum
};

Game.prototype.increaseRoll = function(){
  this.roll ++
};

Game.prototype.changeRoll = function(){
  if( this.roll === 1 ){ this.increaseRoll()
  } else { this.roll = 1 }
};

Game.prototype.increaseFrame = function(){
  if( this.frame < 10 ){ return this.frame ++ }
};

Game.prototype.clearFrameScores = function(){
  this.frameScores = []
};

Game.prototype.isGameFinish = function(){
  if( this.roll === 2 && this.strike === false && this.spare === false ){
    return true
  } else if( this.roll === 3 ){
    return true
  } else {
    return false
  }
};

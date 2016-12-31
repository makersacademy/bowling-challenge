'use strict';

function Game() {
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
};

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

// Game.prototype.passStrike = function(){
//   this.scores.push([ this.STRIKE_PINS, '-' ]);
// };

// Game.prototype.passStrikeBonus = function(user_input){
//   var pins = Number(user_input)
//   if( this.strikeBonus.length === 0 ){ this.strikeBonus[0] = pins
//   } else if( this.strikeBonus.length === 1 ){
//     this.strikeBonus[1] = pins
//   }
//   this.scores[ this.frame - 2 ][2] = this.sumStrikeBonus()
// };

// Game.prototype.passSpareBonus = function(user_input){
//   var pins = Number(user_input)
//   this.scores[ this.frame - 2 ][2] = pins;
// };

// Game.prototype.sumStrikeBonus = function(){
//   var i;
//   var sum = 0;
//   for (i=0; i<this.strikeBonus.length; i++){ sum = sum + this.strikeBonus[i] }
//   return sum
// };

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
       if( this.scores[i][j] !== '-' ){ sum += this.scores[i][j] }
    }
  }
  return sum
};

Game.prototype.increaseRoll = function(){
  this.roll ++
};

Game.prototype.changeRoll = function(){
    this.roll === 1 ? this.increaseRoll() : this.roll = 1;
};

Game.prototype.increaseFrame = function(){
  if( this.frame < 10 ){ return this.frame ++ }
};

Game.prototype.clearFrameScores = function(){
  return this.frameScores = []
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

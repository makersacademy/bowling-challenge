'use strict';

function Game(){
  this._frames = [];
  this.MAX_FRAMES = 10;
  this._total = 0;
}

Game.prototype.totalsOfFrames = function () {
  return this._frames;
};

// ```
// As a player
// To see the correct score of my game
// Each game should accept no more than 10 frames
// ```
Game.prototype.addFrame = function(frame){

  if(this._frames.length <= this.MAX_FRAMES){
    this._frames.push(frame);
  } else {
      throw new Error('The game is over - no more frames left');
  }
};

Game.prototype.calcTotal = function () {
  var game_played = this;
  game_played._total = 0;
  this._frames.forEach(function(frame) {
    game_played._total += frame.calcScore();
  });
  return game_played._total;
};
// Game.prototype.strikeBonus = function(index) {
//   var bonus = this._frames[index+1]._score;
//   var frames = this._frames;
//   if (this.isAStrike(index+1)) {
//     bonus = isAStrike(index+2) ? 20 : 10 + this.frames[index+2].firstBowl;
//   }
//   return bonus;
// }

Game.prototype.isAStrike = function(index){
  return this._frames[index]._score === 'X';
};

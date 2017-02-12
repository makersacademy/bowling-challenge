'use strict';

function Game() {
  this._frames = [];
  this.MAX_FRAMES = 10;
  this._total = 0;
}

Game.prototype.totalsOfFrames = function() {
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

Game.prototype.strikeBonus = function(index) {

  var bonus = this._frames[index+1].calcScore();

  // var frames = this._frames;
  // if (frame.isStrike() {
  //   bonus = isStrike(index+2) ? 20 : 10 + frames[index+2].rollBallOne();
  // }
  return bonus;
};

Game.prototype.spareBonus = function(index) {
   var bonus = this._frames[index+1].rollBallOne();
   return bonus;
};

Game.prototype.calcTotal = function() {
  var game = this;

  var current_score = 0;
  //console.log(current_score);

  this._total = 0;
  // debugger;
  this._frames.forEach(function(frame, index) {
    current_score = frame.calcScore();
    if (frame.isStrike()) {

       console.log(current_score);
      // console.log(game.strikeBonus(index));
      // // var score = frame.calcScore()
      debugger;
      current_score += game.strikeBonus(index);
      console.log(current_score);
    }
  //   else if (frame.isSpare()) {
  //     // console.log(current_score);
  //
  //     current_score += game.spareBonus(index);
  //     debugger;
  //      console.log(current_score);
  //   }
    game._total += current_score;
  });

  console.log(game._total)
  return game._total
};

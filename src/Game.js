'use strict';

function Game(){
  this._frames = [];
  this.MAX_FRAMES = 10;
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

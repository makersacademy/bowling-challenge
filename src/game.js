'use strict';

function Game() {
  this.frame_holder = []
};

var frame_item;
var gamescore;
var frame;
var working_frame;
gamescore = 0;

Game.prototype.loadFrame = function(frame_item) {
  this.frame_holder.push(frame_item);
  return('ok');
};

Game.prototype.getGameScore = function() {
  for(let j = 0; j < this.frame_holder.length; j++){
   frame = this.frame_holder[j];
   gamescore += frame.getRawScore();
}


  return(gamescore);
};

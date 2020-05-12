'use strict';

function Game() {
  this.frameHolder = []
}

var frame_no;
var gamescore;
var frame;
var next_frame;
var frame_plus_two;
var bonus;
var lastframe;

Game.prototype.loadFrame = function(frame_item) {
  if (this.frameHolder.length === 10) {
    throw "Array full"
  } else {
  this.frameHolder.push(frame_item);
  return('ok');}
};

Game.prototype.getGameScore = function() {
  gamescore = 0
  for(frame_no = 0; frame_no < 9; frame_no++){
   frame = this.frameHolder[frame_no];
   bonus = 0
   if (frame.getFrameType() != 'ordinary'){
     bonus = this.getBonusScore(frame_no, frame.getFrameType())
   }
   gamescore += frame.getRawScore() + bonus;}
   lastframe = this.frameHolder[9]
   gamescore += lastframe.getRawScore()
  return(gamescore);
};

Game.prototype.getBonusScore = function(frame_no, frame_type){
  next_frame = this.frameHolder[frame_no+1];
  if(frame_type === 'spare'){
    bonus = next_frame.getFirstRoll();
  } else {
    bonus = this.getStrikeScore(frame_no, next_frame)
  }
  return bonus;
};

Game.prototype.getStrikeScore = function(frame_no, next_frame){
    if (frame_no === 8 ) {
      return (next_frame.getFirstRoll() + next_frame.getSecondRoll())
    }
    if(next_frame.getFrameType() != 'strike') {
    bonus = next_frame.getRawScore();
    } else {
      frame_plus_two = this.frameHolder[frame_no+2];
      bonus = next_frame.getFirstRoll() + frame_plus_two.getFirstRoll();
    }
return bonus;
};

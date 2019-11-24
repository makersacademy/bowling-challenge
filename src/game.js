'use strict';

function Game() {
  this.frame_holder = []
}

var frame_no;
var gamescore;
var frame;
var next_frame;
var frame_plus_two;
var bonus;
var lastframe

Game.prototype.loadFrame = function(frame_item) {
  if (this.frame_holder.length === 10) {
    throw "Array full"
  } else {
  this.frame_holder.push(frame_item);
  return('ok');}
};




Game.prototype.getGameScore = function() {
  gamescore = 0
  for(frame_no = 0; frame_no < 9; frame_no++){
   frame = this.frame_holder[frame_no];
   bonus = 0
   if (frame.getFrameType() != 'ordinary'){
     bonus = this.getBonusScore(frame_no, frame.getFrameType())
   }
   gamescore += frame.getRawScore(frame_no) + bonus;}
   lastframe = this.frame_holder[9]
   gamescore += lastframe.getRawScore()
  return(gamescore);
};

Game.prototype.getBonusScore = function(frame_no, frame_type){
  next_frame = this.frame_holder[frame_no+1];
  frame_plus_two = this.frame_holder[frame_no+2];
  if(frame_type === 'spare'){
    bonus = next_frame.getFirstRoll();
  } else {
    bonus = this.getStrikeScore(frame_no, next_frame)
  }
  return bonus;
};

Game.prototype.getStrikeScore = function(frame_no, next_frame){
  frame_plus_two = this.frame_holder[frame_no+2];
  if(next_frame.getFrameType === 'strike'  || frame_no != 8 ) {
    bonus = next_frame.getFirstRoll() + frame_plus_two.getFirstRoll();
    } else {
    bonus = next_frame.getFirstRoll() + next_frame.getSecondRoll();
  }
return bonus;
};

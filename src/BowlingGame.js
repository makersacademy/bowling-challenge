'use strict';

function BowlingGame(player){
  this._player = player;
  this._scorecard = new Scorecard();
};

BowlingGame.prototype.getPlayer = function(){
  return this._player;
};

BowlingGame.prototype.getScorecard = function(){
  return this._scorecard;
};

BowlingGame.prototype.addNextRoll = function(pinsKnocked){
  let roll = new Roll(pinsKnocked);
  let frames = this._scorecard.getFrames()
  if (frames.length == 0) {
    this._scorecard.createNewFrame();
  }
  frames = this._scorecard.getFrames();
  let last_frame = frames[frames.length - 1];
  if (last_frame.isIncomplete()){
    last_frame.addRoll(roll);
  } else {
    this._scorecard.createNewFrame();
    frames = this._scorecard.getFrames();
    last_frame = frames[frames.length - 1];
    last_frame.addRoll(roll)
  }
};

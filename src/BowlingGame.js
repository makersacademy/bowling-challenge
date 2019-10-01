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
  let last_frame = this._scorecard.getLastFrame();
  if (last_frame == null || last_frame.isComplete(this._scorecard.getFrames().length - 1)) {
    this._scorecard.createNewFrame();
    last_frame = this._scorecard.getLastFrame();
  }
  last_frame.addRoll(roll);
};

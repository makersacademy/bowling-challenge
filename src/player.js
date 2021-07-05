'use strict';

function Player(){
  this._scorecard = new Scorecard
}

Player.prototype.currentScore = function(){return 0}
Player.prototype.bowledOver = function(downedPins){ 
  this._scorecard.addPins(downedPins)
  // return this._scorecard.addPins(downedPins) 
}


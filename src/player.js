'use strict';

function Player(){
  this._scorecard = []
}

Player.prototype.currentScore = function(){return 0}
Player.prototype.bowledOver = function(downedPins){ 
  this._scorecard.push(downedPins) }


"use strict";

var Frame = function() {
 this.rolls = [];
 this.score = 0;
 this.bonus = 0; 
 
};


Frame.prototype.recordScore = function(pins) {
  this.rolls.push(pins);
  this.score += pins;
// this.score += parseInt(pins); for the page
}
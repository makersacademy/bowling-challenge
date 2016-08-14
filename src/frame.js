'use strict';

function Frame (){
  this.pinsStanding = 10
  this.pinsDownFirst = 0;
  this.pinsDownSecond = 0;
}

Frame.prototype.getPinsStanding = function() {
  return this.pinsStanding;
};

Frame.prototype.firstBowl = function() {
  this.pinsDownFirst = Math.floor((Math.random() * this.pinsStanding) + 1);
  this.pinsStanding -= this.pinsDownFirst;
};

Frame.prototype.secondBowl = function() {
  this.pinsDownSecond = Math.floor((Math.random() * this.pinsStanding) + 1);
};

Frame.prototype.playFrame = function() {
  this.firstBowl();
  if (this.pinsStanding > 0) this.secondBowl();
  this.pinsStanding = 10;
  return [this.pinsDownFirst, this.pinsDownSecond];
};

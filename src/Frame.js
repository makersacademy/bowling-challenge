'use strict';

function Frame(){
  this._pincount = 10;
  this._score = 0;
  this.firstroll = null;
  this.secondroll = null;
  this.rollcount = 0;
};

Frame.prototype.pincount = function(){
  return this._pincount;
};

Frame.prototype.score = function(){
  return this._score;
};

Frame.prototype.roll = function(pins){
  if (this.rollcount == 2) throw new Error ("Only 2 rolls per frame!") ;
  this._pincount -= pins;
  this._score += pins;
  if (this.firstroll == null) {
    this.firstroll = pins
  } else {
    this.secondroll = pins
  };
};

Frame.prototype.strike = function(){
  if (this.firstroll == 10) {
    return true;
  }
};

Frame.prototype.spare = function(){
  if (this.firstroll + this.secondroll == 10) {
    return true;
  }
};

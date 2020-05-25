'use strict';

class Game {

  constructor() {
    this.frames = [];
  };
 

create = function(element) {
  if (this.frameCount() === 10) {throw new Error ("No more frames available, create a new game to play again."); }
  for (var i = 0; i < 10; i++) { this.frames.push(new element); }
  //  this.frames.push(new FrameTen());
};

frameCount = function() { 
  return this.frames.length;
};

score = function () {
  var total = 0;
  for (var i = 0; i < this.frames.length; i++) { 
    this._evaluateSpare(i);
    this._evaluateStrike(i);  
    total += this.frames[i].score; 
  }
  return total;
};


_evaluateSpare = function(i) {
   if (this.frames[i].isSpare()) { this.frames[i].score += this._firstExtraRoll(i); }
};

_evaluateStrike = function(i) {
   if (this.frames[i].isStrike()) { this.frames[i].score += (this._firstExtraRoll(i) + this._secondExtraRoll(i)); }
};

_firstExtraRoll = function(i) {
  return this.frames[i+1].firstroll;
};

_secondExtraRoll = function(i) {
  return this.frames[i+1].secondroll|| this.frames[i+2].firstroll;
};

};
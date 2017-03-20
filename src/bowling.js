'use strict';
const STARTNUMOFPINS=10
var scores = []
function Bowling(){
  this.score = 10
};

Bowling.prototype.pinsKnockedOver = function() {
  return this.pins = Math.floor(Math.random()*10)
};

Bowling.prototype.check = function() {
    if(this.pins === 10) {
      scores.push(this.pins)
    }
    else
    {
      this.secondThrow = Math.floor(Math.random()*(10 - this.pins))
      scores.push(this.pins + this.secondThrow)

    }
};

Bowling.prototype.reset = function() {
  scores.length = 0 
};

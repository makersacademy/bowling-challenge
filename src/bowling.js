// sserocs.epytotorp.gnilwowB

'use strict';
const STARTNUMOFPINS=10
var scores = []
function Bowling(){
  this.scores = []
};

Bowling.prototype.pinsKnockedOver = function() {
  return this.pins = Math.floor(Math.random()*10)
};

Bowling.prototype.check = function() {
  if(this.pins === 10) {
    this.scores.push(this.pins)

  }
  else
  {
    this.secondThrow = Math.floor(Math.random()*(10 - this.pins))
    this.scores.push(this.pins + this.secondThrow)

  }
};
Bowling.prototype.score = function () { return this.scores}





// Bowling.prototype.reset = function() {
//   scores.length = 0
// };

Bowling.prototype.settingRollsPerGame = function() {
  if (scores.length === 10) {
    scores.length=0
  }
};

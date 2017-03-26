// sserocs.epytotorp.gnilwowB

'use strict';
var scores = []
function Bowling(){
  this.scores = []
};

Bowling.prototype.pinsKnockedOver = function() {
  return this.pins = Math.floor(Math.random()*11)
};

Bowling.prototype.check = function() {
  if(this.pins === 10) {
    this.scores.push(this.pins)
    
  }
  else
  {
    this.secondThrow = Math.floor(Math.random()*(10 - this.pins))

  }
};
Bowling.prototype.score = function() { return this.scores}
Bowling.prototype.strike = function() { return this.strike}


Bowling.prototype.settingRollsPerGame = function() {
  if (this.scores.length >= 11) {
    return  this.scores.length=0
  }

  Bowling.prototype.strike = function(){
    this.pinsKnockedOver()
    this.check()
  }
};

Bowling.prototype.spare = function(){
  if( this.pins + this.secondThrow == 10)
  {
    this.bonusCheck()
  }
  else
  {
    this.scores.push(this.pins + this.secondThrow)

  }
}

Bowling.prototype.work = function(){
  return ('the number of pins knocked down with the first throw:' + this.pins + 'the number of pins knocked down with the second throw:' + this.secondThrow)
}

Bowling.prototype.bonusCheck = function(){
  this.thirdThrow = Math.floor(Math.random()*10)
  if(this.thirdThrow === 10) {
    console.log('strike')
  }
  else
  {
    this.scores.push(this.pins +this.secondThrow + this.thirdThrow)
  }
}

function Bowling(){
  this.bowlCount = []
  this.remainingBowls = 2
 };

Bowling.prototype.frame = function () {
  this.bowlCount.push(_randomBowl())
  this.remainingBowls--
};

function _randomBowl() {
  return Math.floor(Math.random()*10)+0
};

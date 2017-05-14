function Bowling(){
  this.bowlCount = []
 };

Bowling.prototype.frame = function () {
  this.bowlCount.push(_randomBowl())
};

function _randomBowl() {
  return Math.floor(Math.random()*10)+0
};

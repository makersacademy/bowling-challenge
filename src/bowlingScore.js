function BowlingScore(rollOne, rollTwo, rollThree){
  this.rollOne = null;
  this.rollTwo = null;
  this.rollThree = null;
  if(typeof rollOne !== 'undefined'){this.rollOne = rollOne};
  if(typeof rollTwo !== 'undefined'){this.rollTwo = rollTwo};
  if(typeof rollThree !== 'undefined'){this.rollThree = rollThree};
}

BowlingScore.prototype.frameScore = function(){
  var total = 0;
  if(this.rollOne != null ){total += this.rollOne};
  if(this.rollTwo != null ){total += this.rollTwo};
  if(this.rollThree != null ){total += this.rollThree};
  return total;
};
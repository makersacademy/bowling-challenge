const spare = 10;
const strike = 10;

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

BowlingScore.prototype.isSpare = function(){
  if(this.rollOne != null && this.rollTwo != null){
    if(this.rollOne + this.rollTwo === spare){return true};
  };
  return false;
};

BowlingScore.prototype.isStrike = function(){
  if(this.rollOne != null && this.rollTwo == null){
    if(this.rollOne === strike){return true};
  };
  return false;
};
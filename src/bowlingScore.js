function BowlingScore(rollOne, rollTwo, rollThree){
  this.rollOne = null;
  this.rollTwo = null;
  this.rollThree = null;

  if(rollOne){this.rollOne = rollOne};
  if(rollTwo){this.rollTwo = rollTwo};
  if(rollThree){this.rollThree = rollThree};
}
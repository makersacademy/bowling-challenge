function Frame() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonus = 'none';
  this.BONUS = 10


};

Frame.prototype.play1 = function(pins) {
  return this.rollOne = pins;
};

Frame.prototype.play2 = function(pins) {
  return this.rollTwo = pins;
};

Frame.prototype.currentScore = function(roll) {
  return roll;
};

Frame.prototype.bonusAward = function() {
  if ((this.rollOne === 0 && this.rollTwo !== 0) || (this.rollOne !== 0 && this.rollTwo === 0)
  &&  (this.rollOne + this.rollTwo === this.BONUS)) {
    return this.bonus = 'strike';
  } else if (this.rollOne + this.rollTwo === this.BONUS) {
    return this.bonus = 'spares';
  } else {
    return this.bonus = 'none';
  }
}
Frame.prototype.frameScore = function() {
  return this.rollOne + this.rollTwo;
};



Frame.prototype.bonus = function() {

}

BowlingFrame = function(){
  this.rolls = [];
  this.bonus;
};


BowlingFrame.prototype.saveRoll = function (pins) {
  this.rolls.push(pins);
};

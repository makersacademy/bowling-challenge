BowlingFrame = function(pins){
  this.rolls = [pins];
  this.bonus;
};


BowlingFrame.prototype.saveRoll = function (pins) {
  this.rolls.push(pins);
};

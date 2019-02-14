function Frame() {
  rolls = []
}

Frame.prototype.enterRoll = function(score) {
  roll = new Roll.enterRoll(score)
  storeRolls(roll)
}


Frame.prototype.storeRolls = function(roll) {
  this.rolls.push(roll)
};

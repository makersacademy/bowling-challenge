function Game(){
  this.rolls = []
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.totalScore = function () {
  var total = 0;
  var rollIndex = 0;
  for(var i = 0; i < 10; i++){
    if (this.rolls[rollIndex] === 10) {
      total += (this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
      rollIndex += 1
    } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
      total += (this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
      rollIndex += 2
    } else {
      total += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2
    }
    // plusing by 2 so that it moves to a new frame
  }
  return total
};

Game.prototype.isSpare = function () {
  var rollIndex = 0;
  if(this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10){
    return true
  }
  return false
};

Game.prototype.isStrike = function () {
  var rollIndex = 0;
  if(this.rolls[rollIndex] === 10) {
  return true
}
  return false
};

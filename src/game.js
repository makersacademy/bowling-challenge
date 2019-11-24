function Game(){
  this.rolls = []
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.totalScore = function () {
  var total = 0;
  var rollIndex = 0;
  // i = the index of frame
  for(var i = 0; i < 10; i++){
    total += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    rollIndex += 2
    // plusing by 2 so that it moves to a new frame
  }
  return total
};

Game.prototype.isSpare = function () {
  var rollIndex = 0;
  if(this.rolls[rollIndex] + this.rolls[rollIndex + 1]){
    return true
  }
  return false
};

function Frame(){
  this.myRolls = [0,0];
  this.whichFrame = 1;
  this.frameType = "Natural";
  this.myScore = 0;
}

Frame.prototype.score = function () {
  this.myScore = this.myRolls[0] + this.myRolls[1]
  return this.myScore;
};

Frame.prototype.rolls = function (roll1, roll2) {
  this.myRolls[0] = roll1;
  this.myRolls[1] = roll2;
};

Frame.prototype.whatsMyBonus = function () {
  if (this.myRolls[0] == 10) {
    return "Strike frame"
  } else if (this.myRolls[0] + this.myRolls[1] == 10) {
    return "Spare frame"
  } else {
    return "Natural frame"
  }
};

function Frame(){
  this.myRolls = [0,0];
  this.whichFrame = 1;
  this.frameType = "Natural";
  this.myScore = 0;
}

Frame.prototype.score = function () {
  this.myScore = this.myRolls[0] + this.myRolls[1]
  console.log(`Frame score is currently ${this.myScore}`)
  return this.myScore;
};

Frame.prototype.rolls = function (roll1, roll2) {
  this.myRolls[0] = roll1;
  this.myRolls[1] = roll2;
  console.log(`Your rolls for this frame are ${roll1} and ${roll2}.`)
};

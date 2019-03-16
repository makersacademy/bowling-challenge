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

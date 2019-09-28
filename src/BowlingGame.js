var BowlingGame = function(){
  this.currentRoll = 1
  this.rolls = []
  this.currentFrame = 1
  this.score = 0
  this.remainingRolls = 21
  this.pinsPerFrame = []


};

BowlingGame.prototype.roll = function (pins) {
  this.score += pins;
  this.rolls.push(pins);

   if (this.currentRoll === 1) {
   this.pinsPerFrame.push(pins);
   this.currentRoll = 2
 } else {
   this.pinsPerFrame[this.currentFrame - 1] += pins;
   this.currentFrame += 1
   this.currentRoll = 1
 }
};

function Game() {
  this.frame = 1
  this.currentFrame = 1
  this.currentBowl = 1
  this.bowlingPins = 10
  this.totalScore = 0
  this.frameScore = []
  this.gameScore = [];
  // this.spareBonus = [];
  // this.strikeBonus = [];
  // this.exrtaFrame = [];

};

Game.prototype.bowl = function(pins) {
  var totalScore
  this.currentBowl ++
  this.bowlingPins -= pins
  this.calculateFrame(pins);
  this.bowlingScore(pins)
};

Game.prototype.calculateFrame = function () {
  if (this.currentBowl == 2) {
    this.currentFrame ++
  };
  // if (this.currentFrame == 11) {
  //   alert(`GAME OVER! Final Score is: ${this.totalScore}`);
  // };
  if (this.currentFrame >= 11 && this.frameScore[0] == 10) {
   this.currentFrame = 12;
   return this.gameScore.push(this.frameScore);
 } else if (this.currentFrame >= 11 && (this.frameScore[0] + this.frameScore[1]) != 10 && this.currentFrame != 12) {
   this.gameScore.push(this.frameScore);
   this.calculateFinalScore();
   console.log(`GAME OVER! Final Score is: ${this.totalScore}`);
 };
};
Game.prototype.bowlingScore = function (pins) {
  this.totalScore += pins;
};

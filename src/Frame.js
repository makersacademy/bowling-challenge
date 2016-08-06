function Frame(){

  this.firstBall = 0;
  this.knockedPins = 0;
  this.secondBall = 0;
  this.frameScore = [];

}

Frame.prototype.firstBowl = function () {
  this.firstBall = Math.round(Math.random() * (1 - 10) + 10);
  this.knockedPins = this.firstBall;
};
// module.exports = Frame;

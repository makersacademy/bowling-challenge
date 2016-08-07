function Game() {
  this.TOTAL_PINS = 10;
  this.pinsLeft = this.TOTAL_PINS;
  this.rollNumber = 1;
  this.frameNumber = 1;
  this.totalPoints = 0;
  this.pinsKnocked = 0;
}

Game.prototype = {
  roll: function () {
    this.pinsKnocked = Math.random(this.pinsLeft);
    this.totalPoints = this.pinsKnocked;
    this.rollNumber += 1;
  }
};

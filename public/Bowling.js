function BowlingGame() {
  this.MAX_FRAMES = 10;
  this.MAX_PINS = 10;
  this.MAX_ROLL = 2;
  this.CURRENTGO = "yes";
  this.currentScore = "yes";

};

BowlingGame.prototype.bowl = function(pins) {
  this.currentGo +=1;
  this.currentScore += pins;
  // if (this.currentGo === "ON") {this.powerSaving = "OFF";
  // this.MAX_TEMPERATURE = 32;}

};

BowlingGame.prototype.totalScore = function() {
  return 0;
};

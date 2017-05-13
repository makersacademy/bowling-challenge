function Player() {
  this.score = 0;
  this.frames = 9;
  this.roll1Score = 0;
  this.roll2Score = 0;
}
Player.prototype.bowl = function() {
   this.roll1();
};

Player.prototype.roll1 = function (number) {
  this.roll1Score = number
  this.score = this.roll1Score;
};

Player.prototype.roll2 = function(number){
  this.roll2Score = number
  this.score  = this.roll2Score + this.roll1Score;
};

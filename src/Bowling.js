function Player() {
  this.score = 0;
  this.frames = 9;
  this.roll1Score = 1;
  this.roll2Score = 2;
}
Player.prototype.bowl = function() {
   this.roll1();
};

Player.prototype.roll1 = function(){
  this.score = this.roll1Score;
};

Player.prototype.roll2 = function(){
  this.score  = this.roll2Score + this.roll1Score;
};

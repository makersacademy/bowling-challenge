function Player() {
  this.score = 0
  this.frames = 9
}
Player.prototype.bowl = function() {
   this.roll1();
};

Player.prototype.roll1 = function(){
  this.score = 1
};

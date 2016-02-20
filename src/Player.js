function Player() {

}

Player.prototype.play = function() {
  this.game = new Game;
};

Player.prototype.firstBowl = function() {
  this.frame = new Frame;
  this.frame.calculateScore1();
};

Player.prototype.secondBowl = function() {
  this.frame.calculateScore2();
  this.game.addFrame();
};

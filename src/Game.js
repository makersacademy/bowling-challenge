//Understands a complete bowling game
function Game() {
  this.currScore = 0;
  this.remainingFrames = 10;

}

Game.prototype = {

  frameDecrease: function() {
    this.remainingFrames --;
  }

}

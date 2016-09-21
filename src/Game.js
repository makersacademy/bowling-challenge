//Understands a complete bowling game
function Game() {
  this._currScore = 0;
  this.remainingFrames = 10;
  this.frame = new Frame();
}

Game.prototype = {
  frameDecrease: function() {
    this.remainingFrames --;
  },

  updateScore: function() {
    this.frameDecrease();
    this._currScore = this.frame.rollOne() + this.frame.rollTwo();
  },

  playerScore: function() {
    return this._currScore
  }

}

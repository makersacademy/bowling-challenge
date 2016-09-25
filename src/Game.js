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
    this._currScore += (this.firstRoll() + this.secondRoll());
  },

  playerScore: function() {
    return this._currScore
  },

  firstRoll: function() {
    return this.frame.rollOne();
  },

  secondRoll: function() {
    return this.frame.rollTwo();
  },


}

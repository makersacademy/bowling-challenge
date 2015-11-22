function Frame() {
  this.standingPins = 10;
  this.rolls = [];
}
  Frame.prototype.updateFrame = function(pinsKnockedDown) {
    this.rolls.push(pinsKnockedDown);
    this.standingPins -= pinsKnockedDown;
  }

  Frame.prototype.isOver = function() {
    return this.rolls.length === 2 || this.isStrike() ? true : false;
  }

  Frame.prototype.isStrike = function() {
    return (this.rolls[0] === 10);
  }

  Frame.prototype.isSpare = function() {
    return this.rolls[0] + this.rolls[1] === 10 ? true : false;
  }

  // .load ./src/Game.js
  // .load ./src/Frame.js
  // game = new Game;

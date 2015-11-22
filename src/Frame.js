function Frame() {
  this.standingPins = 10;
  this.rolls = [];


  Frame.prototype.updateFrame = function(pinsKnockedDown) {
    this.rolls.push(pinsKnockedDown);
    this.standingPins -= pinsKnockedDown;
  }

  Frame.prototype.isOver = function() {
    return this.rolls.length === 2 ? true : false;
  }
}

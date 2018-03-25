function Game(rolls = 1, frameNumber = 1, totalScore = 0, frames = []){
  pins = new Pins;
  this.defaultPins = pins.default
  this.rolls = rolls
  this.frameNumber = frameNumber
  this.totalScore = totalScore
  this.frames = frames;
}

Game.prototype.roll = function(n) {
  if (this.frameNumber > 10) {
    throw new Error('You already did 10 frames!');
  } else if (this.rolls === 1) {
    if (n === 10) {
      if (this.frameNumber === 10) {
        this.rolls += 1
      } else {
        this.frameNumber += 1
      }
      return this.defaultPins;
    } else {
      this.rolls += 1
      secondButtons = this.defaultPins.slice(0, 11 - n)
      return secondButtons;
    }
  } else if (this.rolls === 2) {
      if (this.frameNumber === 10) {
        if (n === 10) {
          this.rolls += 1
        } else if (secondButtons.length - 1 === n) {
        this.rolls += 1;
        } else {
        this.rolls -= 1;
        }
      } else {
        this.rolls -= 1;
        this.frameNumber += 1
      }
    return this.defaultPins;
  } else if (this.rolls === 3) {
    this.frameNumber += 1
    this.rolls -= 2
    return this.defaultPins;
  }
};

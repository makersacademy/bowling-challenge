function NumberOfPins(frame = 1, rolls = 1, score = 0){
  this.DEFAULT_BUTTONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  this.frame = frame
  this.rolls = rolls
  this.score = score
}

NumberOfPins.prototype.roll = function(n) {
  if (this.frame > 10) {
    throw new Error('You already did 10 frames!');
  } else if (this.rolls === 1) {
    if (n === 10) {
      if (this.frame === 10) {
        this.rolls += 1
      } else {
        this.frame += 1
      }
      return this.DEFAULT_BUTTONS;
    } else {
      this.rolls += 1
      secondButtons = this.DEFAULT_BUTTONS.slice(0, 11 - n)
      return secondButtons;
    }
  } else if (this.rolls === 2) {
      if (this.frame === 10) {
        if (n === 10) {
          this.rolls += 1
        } else if (secondButtons.length - 1 === n) {
        this.rolls += 1;
        } else {
        this.rolls -= 1;
        }
      } else {
        this.rolls -= 1;
        this.frame += 1
      }
    return this.DEFAULT_BUTTONS;
  } else if (this.rolls === 3) {
    this.frame += 1
    this.rolls -= 2
    return this.DEFAULT_BUTTONS;
  }
};

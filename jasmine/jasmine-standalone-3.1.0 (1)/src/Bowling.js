function NumberOfPins(frame = 0){
  this.DEFAULT_BUTTONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  this.frame = frame
}

NumberOfPins.prototype.firstRoll = function(n) {
  this.frame += 1
  if (this.frame > 10) {
    throw new Error('You already did 10 frames!');
  } else if (n === 10) {
    return this.DEFAULT_BUTTONS;
  } else {
  secondButtons = this.DEFAULT_BUTTONS.slice(0, 11 - n)
  return secondButtons;
  }
};

NumberOfPins.prototype.secondRoll = function(n) {
  return this.DEFAULT_BUTTONS
}

function Frame() {
  this.rolls = [];
}

Frame.prototype.score = function () {
  return 0;
};

Frame.prototype.roll = function (pins) {
  if (this.rolls.length === 2) {
    throw new Error('Illegal roll, frame complete');
  } else {
    this.rolls.push(pins);
  }

};

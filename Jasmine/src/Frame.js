// calculates score of each frame
const MINIMUM_ROLLS = 0;

function Frame() {
  this.rolls = MINIMUM_ROLLS;
};

Frame.prototype.currentRoll = function() {
  return this.rolls += 1;
};

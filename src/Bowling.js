function Scorecard() {
  this.score = []
  this.frames = [[], [], [], [], [], [], [], [], [], []]
  this.roll = 0
  // this.roll2 = 0
}

Scorecard.prototype.roll = function(pinsDown) {
  this.roll = pinsDown
};

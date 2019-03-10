function Scorecard() {
  this.scores = []
  this.frames = [[], [], [], [], [], [], [], [], [], []]
  this.pinsDown = 0
  this.frameScore = 0
  // this.roll2 = 0
}

Scorecard.prototype.roll = function(pinsDown) {
  if (this.even(this.scores.length) && pinsDown == 10) {
    this.scores.push(pinsDown);
    this.scores.push(0);
  } else {
    this.scores.push(pinsDown);}
    this.eachFrame();
};

Scorecard.prototype.isEven = function(length) {
  if (length % 2 == 0) {return true}
  else {return false}
}

// Scorecard.prototype.calculateFrame = function() {
//   if this.isEven(this.scores.length) {
//     this.frameSc
//   }

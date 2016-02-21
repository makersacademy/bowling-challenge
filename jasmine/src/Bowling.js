function Bowling() {
  this.frame = [];
  this.score = 0;
};

Bowling.prototype.pinsHit = function(number) {
  this.frame.push(number);
  if (this.frame.length === 2) {
    this.logScore(this.frame);
    this.frame = [];
  }
};

Bowling.prototype.logScore = function(frame) {
  this.score = this.score + this.frame[0] + this.frame[1];
};

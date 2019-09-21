function BowlingCard() {
  this.scores = [];
};

BowlingCard.prototype.enterScore = function(score) {
  this.scores.push(score);
};

function Score() {
  this.frame = 0;
  this.roll = 0;
  this.score = 0;
};
Score.prototype.enter = function(frame,roll,score) {
  this.frame = frame;
  this.roll = roll;
  this.score = score;
};

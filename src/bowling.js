function BowlingCard() {
  this.scores = [[]];
};

BowlingCard.prototype.enterScore = function([frame,roll,score]) {
  this.scores[0].push(frame,roll,score);
};

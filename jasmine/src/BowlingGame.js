var BowlingGame = function() {
  this.frames = [];
};

BowlingGame.prototype.totalScore = function() {
  return this.frames.reduce(function(score, frame, index, frames){
    return score + frame.totalPoints(frames[index + 1], frames[index + 2]);
  }, 0);
};

BowlingGame.prototype.saveRolls = function(rolls) {
  frame = new Frame(rolls);
  this.frames.push(frame);
};

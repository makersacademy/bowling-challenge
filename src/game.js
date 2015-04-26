Game = function() {
  this.frames = [];
};

Game.prototype.addFrames = function(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, optionalframe) {
  this.frames.push(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10);
  if (optionalframe) { this.frames.push(optionalframe)};
};

Game.prototype.score = function() {
  this.FailIfBonusIncorrectlyGiven();
  return this.getWinMessage(this.calculateScore());
};

Game.prototype.getWinMessage = function(score) {
  if (score == 300) return "PERFECT GAME!";
  if (score === 0) return "GUTTER GAME!";
  return score;
};

Game.prototype.calculateScore = function() {

  var total = [];

  for (i = 0; i < 10; i++) {

    currentFrame = this.frames[ i ];
    nextFrame = this.frames[ i + 1 ];
    isFinalFrame = i === 9;

    total.push(currentFrame.knockedDown());

    if (currentFrame.isSpare()) {
      total.push(nextFrame.bowled[0]);
      continue;
    };

    if (currentFrame.isStrike() && isFinalFrame) {
      total.push(this.bonusRollsTotal());
      continue;
    };

    if (currentFrame.isStrike() && nextFrame.isStrike()) {
        total.push(nextFrame.bowled[0]);
        total.push(this.frames[i + 2].bowled[0]);
        continue;
    };

    if ( currentFrame.isStrike() ) {
        total.push( nextFrame.knockedDown());
    };
  };
  return total.reduce(this.add);
};

Game.prototype.add = function(a, b) {
    return a + b;
};

Game.prototype.bonusRollsTotal = function() {
  if (this.frames[10].bowled[1]) {
    return this.frames[10].knockedDown();
  };
  return this.frames[10].bowled[0];
};

Game.prototype.FailIfBonusIncorrectlyGiven = function() {

  if ((this.frames.length === 11) && (this.frames[9].knockedDown() !== 10)) throw new Error("You cannot add bonuses as you did not strike or spare in your final frame!");
};
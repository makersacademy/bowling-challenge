var Game = function () {
  this.frames = [];
};

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll)
  if(frame.rolls[0] + frame.rolls[1] > 10) {
    throw('Maximum frame score is 10');
  } else {
    this.frames.push(frame.rolls);
  };
};

Game.prototype.addFinalFrame = function(firstRoll, secondRoll, thirdRoll) {
  frame = new Frame(firstRoll, secondRoll)
  frame.bonusRoll(thirdRoll);
  this.frames.push(frame.rolls);
}

Game.prototype.frameTotal = function(frame) {
  return frame.reduce((a,b)=> a + b);
};

Game.prototype.isSpare = function(frame) {
  return this.frameTotal(frame) === 10;
};

Game.prototype.isStrike = function(frame) {
  return frame[0] === 10;
};

Game.prototype.strikeBonus = function(index) {
  if (this.isStrike(this.frames[index + 1])) {
    if (index > 7) {
      return 10 + this.frames[index + 1][1]
    } else {
      return this.frameTotal(this.frames[index + 1]) + this.frames[index + 2][0];
    };
  } else {
    return this.frameTotal(this.frames[index + 1]);
  };
};

Game.prototype.spareBonus = function(index) {
  return this.frames[index + 1][0];
};

Game.prototype.score = function(framesPlayed) {
  var score = 0;
  var frames = this.frames;

  for(var i = 0; i < framesPlayed; i++) {
    if (i > 8) {
      score += this.frameTotal(frames[i]);
    } else {
      if(this.isStrike(frames[i])) {
        score += 10 + this.strikeBonus(i);
      } else if (this.isSpare(frames[i])) {
        score += 10 + this.spareBonus(i);
      } else {
        score += this.frameTotal(frames[i]);
      };
    };
  };
  return score;
};

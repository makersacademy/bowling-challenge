function Game() {
  this.frames = [];
  this.scores = [];
};

Game.prototype.roll = function(frame) {
  this.frames.push(frame);
};

Game.prototype.score = function() {
  this.frames.forEach((frame, index) => {
    this.scores.push(this.calculateFrameScore(frame, index));
  });
  return this.scores.reduce((total, score) => {
    return total + score;
  })
};

Game.prototype.calculateFrameScore = function(frame, index) {
  var rolls = this.frames.slice(index).flat();
  var numberOfRolls = rolls.length;
  var score = 0;

  if (index === 9) {
    return frame.reduce((total, roll) => {
      return total + roll;
    }, 0);
  } else {
    if (frame.length > 1) {
      var roll2 = frame[1];
    } else {
      var roll2 = 0;
    }
    
    if (frame[0] === 10) {
      if (numberOfRolls > 1) {
        score += rolls[1];
        if (numberOfRolls > 2) {
          score += rolls[2];
        }
      }
    } else if (frame[0] + roll2 === 10) {
      if (numberOfRolls > 2) {
        score += rolls[2];
      }
    }
    score += frame[0] + roll2;
    return score;
  }
};

// return (isMember ? '$2.00' : '$10.00');
function Game() {
  this.score = 0;
  this.frames = [];
  this.frameTotals = [];
  this.frame = new Frame();
  this.currentResult = 0;
  this.frameInPlay = false;
}

Game.prototype.bowl = function() {
  frame = this.frame;

  if (this.frames.length === 10) {
    lastFrame = this.frames[9];
    if (lastFrame === 10) {
      this.bonusStrike();
    } else if (lastFrame[0] + lastFrame[1] === 10) {
      this.bonusSpare();
    } else {
      return this.gameOver();
    }
  } else {
    this.frameInPlay = true;
    this.currentResult = frame.roll();
    if (frame.complete) {
      this.endFrame(frame);
    }
  }
};

Game.prototype.endFrame = function(frame) {
  this.frames.push(frame.score);
  this.frameInPlay = false;
  this.frame = new Frame();
}

Game.prototype.sumFrames = function() {
  var arr = this.frames;
  var total = [];
  for (var i = 0; i < arr.length; i++ ) {
    arr[i].reduce(function(a,b) {
      if (a === 10) {
        total.push(a + (arr[i+1][0] + arr[i+1][1]));
      } else if (a + b === 10) {
        total.push((a + b) + (arr[i+1][0]));
      } else {
        total.push(a + b);
      }
    });
    this.frameTotals = total;
  };
  return total;
}

Game.prototype.calculateScore = function() {
  var arr = this.frameTotals;
  var result = arr.reduce(function(a,b) {
    return (a + b);
  });
  return result;
}

Game.prototype.gameOver = function() {
  return "Game Over";
}

Game.prototype.bonusStrike = function() {
  frame = new Frame();
  frame.roll()
  frame.roll()
  this.frames.push(frame.score);
}

Game.prototype.bonusSpare = function() {
  this.frames.push(frame.roll());
}

function Frame() {
  this.score = [];
  this.pins = 10;
  this.complete = false;
}

Frame.prototype.roll = function() {
  result = this.knockDownPins(this.pins);
  this.updateScore(result);
  this.isFrameComplete() ? this.complete = true : this.complete = false;
  return result;
}

Frame.prototype.knockDownPins = function(pins) {
  return (Math.floor(Math.random() * pins) + 1);
};

Frame.prototype.updateScore = function(result) {
  this.score.push(result);
  switch (true) {
    case (this.isStrike(result)):
      this.updateScoreForStrike(result);
      return "Strike";
    case (this.isSpare(result)):
      return "Spare";
    default:
      this.pins -= result;
    }
}

Frame.prototype.isStrike = function(result) {
  return (result === 10);
}

Frame.prototype.isSpare = function(result) {
  return (this.score[0] + result === 10);
}

Frame.prototype.updateScoreForStrike = function(result) {
  this.score.push(0);
}

Frame.prototype.isFrameComplete = function() {
  return (this.score.length > 1);
}

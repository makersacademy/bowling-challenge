function Game() {
  this.gameTotal = 0;
  this.complete = false;
  frames = [];
};

Game.prototype.recordBall = function(score) {
  if (frames.length === 10) { return this.complete = true; }

  if (frames.length === 0) {
    createNewFrame(score);
    return this.gameTotal += score;
  }

  if (frames.slice(-1)[0].isComplete() == false) {
    addToFrame(score);
    return this.gameTotal += score;
  }
  else {
    createNewFrame(score);
  }

  function createNewFrame(score) {
    frame = new Frame();
    frame.recordScore(score);
    frames.push(frame);
  };

  function addToFrame(score) {
    currentFrame = frames.slice(-1)[0];
    currentFrame.recordScore(score);
  };

};

Game.prototype.isComplete = function() {
  return this.complete;
};

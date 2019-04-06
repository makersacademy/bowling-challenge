function Game() {
  this.complete = false;
  this.frames = [];
  this.gameTotal = 0;
};

Game.prototype.recordBall = function(score) {

  if(this.complete === true) { return this.gameTotal; }

  if (this.frames.length === 0) {
    this.frames.push(createNewFrame(score, this.frames));
    return this.gameTotal += score;
  }

  if (this.frames.slice(-1)[0].isComplete() == false) {
    addToFrame(score, this.frames.slice(-1)[0]);
    this.complete = checkEndOfGame(this.frames);

    return this.gameTotal += score;
  }
  else {
    this.frames.push(createNewFrame(score));
    this.complete = checkEndOfGame(this.frames);
    
    return this.gameTotal += score;
  }

  function createNewFrame(score, frames) {
    frame = new Frame();
    return frame.recordScore(score);
  };

  function addToFrame(score, frame) {
    frame.recordScore(score);
  };

  function checkEndOfGame(frames) {
    if (frames.length === 10 && frames.slice(-1)[0].isComplete() == true) {
      return true;
    } else { return false; }
  }

};

Game.prototype.isComplete = function() {
  return this.complete;
};

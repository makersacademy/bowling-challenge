
function Bowling(frames = 10) {
  this._maxFrames = frames
  this._scores = [[]]
  this._frame = 0
  this._endOfGame = false
}

Bowling.prototype.roll = function(...args) {
  args.forEach(pins => {
    if(this._endOfGame) {
      throw new Error("Game has ended, cannot roll")
    } else {
      this._scores[this._frame].push(pins)

      this.spareOrStrike(this._frame, pins)
      this._getExtra(this._frame, pins)
      this._isEndOfFrame(this._frame, pins)
      this.checkEnd()
    }
  });
}

Bowling.prototype.checkEnd = function() {
  if(this._frame == this._maxFrames) {
    this._endOfGame = true;
  }
}

Bowling.prototype.isEndOfGame = function() {
  return this._endOfGame
}
 
Bowling.prototype.score = function() {
  // sum 2d array
  return this._scores.reduce(function(a,b) { return a.concat(b) })
  .reduce(function(a,b) { return a + b}, 0); 
}

Bowling.prototype.getFrame = function() {
  return this._frame + 1
}

Bowling.prototype._isEndOfFrame = function(frame, pins) {
  if (this._scores[frame].length >= 2 || pins === 10) {
    this._frame++;
    this.newFrame();
  }
}

Bowling.prototype.newFrame = function() {
  this._scores[this._frame] = [];
}

Bowling.prototype.spareOrStrike = function(frame, pins) {
  frame = this._frame
  if(this._scores[frame].length === 2 && 
    this._scores[frame].reduce((a, b) => a + b, 0) === 10) this._scores[frame].push("spare");
  if(pins === 10) this._scores[frame].unshift("strike","strike");
}

Bowling.prototype._getExtra = function(frame, pins) {
  //this is hideous, refactor later
  if(frame === 1) {
    if(this._scores[frame - 1].includes("strike")) {
      this._scores[frame - 1].shift();
      this._scores[frame - 1].push(pins); 
    } else if(this._scores[frame - 1].includes("spare")) {
      this._scores[frame - 1].pop();
      this._scores[frame - 1].push(pins); 
    }
  } else if (frame > 1) {
    if(this._scores[frame - 1].includes("strike") && this._scores[frame - 2].includes("strike")) {
      this._scores[frame - 1].shift();
      this._scores[frame - 1].push(pins); 
      this._scores[frame - 2].shift();
      this._scores[frame - 2].push(pins);
    } else if(this._scores[frame - 1].includes("strike")) {
      this._scores[frame - 1].shift();
      this._scores[frame - 1].push(pins); 
    } else if(this._scores[frame - 1].includes("spare")) {
      this._scores[frame - 1].pop();
      this._scores[frame - 1].push(pins); 
    }
  }
}
module.exports = Bowling
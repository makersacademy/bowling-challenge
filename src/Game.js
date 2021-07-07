function Game() {
  this._frames = [];
}
Game.prototype = {
  addFrame: function(frame) {
    if(this._frames.length < 10) {
      this._frames.push(frame);
    } else {
      throw new Error('Cannot add more frames!');
    }
  },
  gameScore: function() {
    var total = 0;
    this._frames.forEach(function(thisFrame) {
      total += thisFrame.frameScore();
    });
    return total
  },
  frameBonus: function(frame) {
    if (frame.isASpare()) {
      return this._nextFrame(frame).pinsFirstRoll();
    } else if (frame.isAStrike()) {
      return this._nextFrame(frame).frameScore();
    } else {
      return 0
    }
  },
  _nextFrame: function(frame) {
    var nextIndex = this._frames.indexOf(frame) + 1
    return this._frames[nextIndex]
  }
}
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
  }
}

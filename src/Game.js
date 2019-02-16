function Game() {
  this._frames = [];
}
Game.prototype = {
  addFrame: function(frame) {
    this._frames.push(frame);
  }
}

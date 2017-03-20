 function Game() {
   this._frames = [];
}

Game.prototype.addNewFrame = function(frame) {
  this._frames.push(frame);
};

function Frame() {
  this._frames = []
  this._rolls = 2
  this._pins = 10
}

Frame.prototype.roll = function(value) {
  if (this._rolls > 0) {
  this._rolls = this._rolls - 1};
};

Frame.prototype.score = function() {

};

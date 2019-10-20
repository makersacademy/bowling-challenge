function Frame() {
  this._score = 0;
  this._bowls = [0,0]
  this._bonus = [0,0];
  this._type = 'normal'
  this._number = 1;
}

Frame.prototype.add = function(score) {
  this.score += score
}
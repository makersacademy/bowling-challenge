function Frame() {
  this._score = 0
  this._rollNum = 0
}

Frame.prototype.rollOne = function(score) {
  this._score = score
  this._rollNum = 1
}

Frame.prototype.rollTwo = function(score) {
  this._score += score
  this._rollNum = 2
};

Frame.prototype.score = function() {
  if(this._score === 10 && this._rollNum === 1) { return 'X' }
  if(this._score === 10 ) { return '/' }
  return this._score
}

Frame.prototype.rollNumber = function() {
  return this._rollNum
};
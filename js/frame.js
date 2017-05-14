var Frame = function () {
  this._score = 0
  this._finished = false
  this._rolls = []
  for (var i=0; i<2; i++){
    this._rolls.push(new Roll)
  }
}

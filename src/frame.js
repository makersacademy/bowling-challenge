function Frame(){
  this._score = 0
  this._numberOfThrows = 0
}

Frame.prototype.roll = function(pins) {
  if(this._numberOfThrows <= 2){
    this._score += pins
    this._numberOfThrows ++
  } else {
    throw new Error('Two rolls per frame!')
  }
}

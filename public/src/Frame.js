function Frame(){
  this._allFrames = []
};

Frame.prototype.rollOneToNine = function(rollOne, rollTwo) {
  let arr = []
  arr.push(rollOne, rollTwo);
  if(arr[0] == 10){
    arr.pop();
    return this._allFrames.push(arr)
  } else {
  return this._allFrames.push(arr)
  }
};

Frame.prototype.rollTen = function(rollOne, rollTwo, rollThree = 0) {
  let arr = []
  arr.push(rollOne, rollTwo, rollThree)
  return this._allFrames.push(arr)
};

Frame.prototype.allFrames = function(){
  return this._allFrames
}

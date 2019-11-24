function Game(){
  this.tenFrames = [];
}

Game.prototype.endRoll = function (endFrame) {
  this.tenFrames.push(endFrame);
  return this.tenFrames;
};

Game.prototype.totalScore = function () {
  arr = this.tenFrames
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum
};

Game.prototype.isGutterGame = function () {
  if (this.totalScore() === 0){
    return true
  }
  return false
};

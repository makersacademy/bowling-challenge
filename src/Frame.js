function Frame() {
  this.frameScore = [];
}

Frame.prototype.rollOne = function(number) {
  if(number === 10) {
    this.frameScore.push(number);
    this.frameScore.push(0)
  } else {
    this.frameScore.push(number);
  };
};

Frame.prototype.rollTwo = function(number) {

this.frameScore.push(number);
};

Frame.prototype.rollOneScore = function() {
  var r1 = parseInt(this.frameScore[0], 10)
  return r1;
}

Frame.prototype.rollTwoScore = function() {
  var r2 = parseInt(this.frameScore[1], 10)
  return r2;
}

Frame.prototype.frameScores = function() {
  var r1 = parseInt(this.frameScore[0], 10)
  var r2 = parseInt(this.frameScore[1], 10)
  return r1 + r2
}
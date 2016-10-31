function Score() {
  this.frames = [];
}

Score.prototype.addFrame = function (frame) {
  this.frames.push(frame);
};

Score.prototype.total = function () {
  var scoreTotal = 0;
  for(var i = 0; i < this.frames.length; i++) {
    scoreTotal += this.frames[i].total();
  }
  return scoreTotal;
};

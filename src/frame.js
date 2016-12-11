var Frame = function() {
  this.frames = [];
};

Frame.prototype.completeFrame = function(roll1, roll2) {
  var frameCalc = this.frames.push(roll1, roll2);
  return frameCalc.length;
};

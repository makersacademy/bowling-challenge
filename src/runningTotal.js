runningTotal = function() {
  return this.frames.reduce(function(accumulator, item) {
    return accumulator + item.finalFrameScore }, 0);
};

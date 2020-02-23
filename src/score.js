function Score() {
  this.total = 0;
};

Score.prototype.add = function(results) {
  numFrames = results.length;
  ans = 0;
  for(i = 0; i < numFrames; i++) {
    frameLength = results[i].length;
    for(n = 0; n < frameLength; n++) {
      ans += results[i][n]
    }
  }
  return(ans);
}

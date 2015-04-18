var Frame = function(){
};


Frame.prototype.frameOne = function (x, y) {
  frameOneInfo = [];    // Told not to do this but test fails with var in front?!
  frameOneInfo.push(x);
  frameOneInfo.push(y);
  frameOneInfo.push('strike')
  return frameOneInfo;
};

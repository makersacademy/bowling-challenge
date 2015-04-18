var Frame = function(){
};


Frame.prototype.frameOne = function (x, y) {
  frameOneInfo = [];    // Told not to do this but test fails with var in front?!

  frameOneInfo.push(x);
  frameOneInfo.push(y);

  if ( x === 10 ) {
  frameOneInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameOneInfo.push('spare')
}

  return frameOneInfo;
};

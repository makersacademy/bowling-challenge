function Frame () {
  this.playerRollCount = [];
  this.playerFrameCount = [];
  result = 0;
  frameResult = 0;
};

Frame.prototype.roll = function(roll) {
  this.playerRollCount.push(roll);
  result += 1;
  return result;
};


//
// frame 1
// to
// bowl 1
// to true or false
// strike? yes move to frame 2
// no move to bowl 2
// bowl 2
// to true or false
// spare? move to frame 2
//
//
//
// add score

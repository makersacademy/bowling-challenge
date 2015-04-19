var Frame = function(){
  this.runningScore = 0
};

Frame.prototype.runningScore = function () {
  return runningScore
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

  this.runningScore += frameOneInfo[0]
  this.runningScore += frameOneInfo[1]
  return this.runningScore;
};


Frame.prototype.frameTwo = function (x, y) {
  frameTwoInfo = [];

  frameTwoInfo.push(x);
  frameTwoInfo.push(y);

  if ( x === 10 ) {
  frameTwoInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameTwoInfo.push('spare')
}

  this.runningScore += frameOneInfo[0]
  this.runningScore += frameOneInfo[1]
  return this.runningScore;
  
};

















Frame.prototype.frameThree = function (x, y) {
  frameThreeInfo = [];    // Told not to do this but test fails with var in front?!

  frameThreeInfo.push(x);
  frameThreeInfo.push(y);

  if ( x === 10 ) {
  frameThreeInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameThreeInfo.push('spare')
}

  return frameThreeInfo;
};


Frame.prototype.frameFour = function (x, y) {
  frameFourInfo = [];    // Told not to do this but test fails with var in front?!

  frameFourInfo.push(x);
  frameFourInfo.push(y);

  if ( x === 10 ) {
  frameFourInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameFourInfo.push('spare')
}

  return frameFourInfo;
};


Frame.prototype.frameFive = function (x, y) {
  frameFiveInfo = [];    // Told not to do this but test fails with var in front?!

  frameFiveInfo.push(x);
  frameFiveInfo.push(y);

  if ( x === 10 ) {
  frameFiveInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameFiveInfo.push('spare')
}

  return frameFiveInfo;
};


Frame.prototype.frameSix = function (x, y) {
  frameSixInfo = [];    // Told not to do this but test fails with var in front?!

  frameSixInfo.push(x);
  frameSixInfo.push(y);

  if ( x === 10 ) {
  frameSixInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameSixInfo.push('spare')
}

  return frameSixInfo;
};


Frame.prototype.frameSeven = function (x, y) {
  frameSevenInfo = [];    // Told not to do this but test fails with var in front?!

  frameSevenInfo.push(x);
  frameSevenInfo.push(y);

  if ( x === 10 ) {
  frameSevenInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameSevenInfo.push('spare')
}

  return frameSevenInfo;
};


Frame.prototype.frameEight = function (x, y) {
  frameEightInfo = [];    // Told not to do this but test fails with var in front?!

  frameEightInfo.push(x);
  frameEightInfo.push(y);

  if ( x === 10 ) {
  frameEightInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameEightInfo.push('spare')
}

  return frameEightInfo;
};


Frame.prototype.frameNine = function (x, y) {
  frameNineInfo = [];    // Told not to do this but test fails with var in front?!

  frameNineInfo.push(x);
  frameNineInfo.push(y);

  if ( x === 10 ) {
  frameNineInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameNineInfo.push('spare')
}

  return frameNineInfo;
};


Frame.prototype.frameTen = function (x, y, z) {
  frameTenInfo = [];    // Told not to do this but test fails with var in front?!

  frameTenInfo.push(x);
  frameTenInfo.push(y);

  if ( x === 10 ) {
  frameTenInfo.push('strike');
} else if ( x != 10 && x + y === 10 ) {
  frameTenInfo.push('spare')
}

  frameTenInfo.push(z);

  return frameTenInfo;
};

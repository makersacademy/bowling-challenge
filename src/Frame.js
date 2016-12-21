var Frame = function(){
  this.runningScore = 0
  this.score = { f1r1: 0, f1r2: 0, s1: 0, f2r1: 0, f2r2: 0, s2: 0, f3r1: 0, f3r2: 0, s3: 0,
                f4r1: 0, f4r2: 0, s4: 0, f5r1: 0, f5r2: 0, s5: 0, f6r1: 0, f6r2: 0, s6: 0,
                f7r1: 0, f7r2: 0, s7: 0, f8r1: 0, f8r2: 0, s8: 0, f9r1: 0, f9r2: 0, s9: 0,
                f10r1: 0, f10r2: 0, f10r3: 0, s10: 0 };
};

Frame.prototype.frameOne = function (x, y) {
  this.score.f1r1 = x
  this.score.f1r2 = y
  this.score.s1 = x + y
  if (this.score.s1 < 10) {
    return this.score.s1
  } else {
    return ' '
}
};

Frame.prototype.frameTwo = function (x, y) {
  this.score.f2r1 = x
  this.score.f2r2 = y
  this.score.s2 = x + y
  if (this.score.f1r1 < 10 && this.score.s1 === 10) {
    this.score.s1 += this.score.f2r1
    this.runningScore = this.score.s1 + this.score.s2
    return this.runningScore;
  } else if (this.score.f1r1 === 10) {
    this.score.s1 += this.score.s2
    this.runningScore = this.score.s1 + this.score.s2
    return this.runningScore;
  } else {
    this.runningScore = this.score.s1 + this.score.s2
    return this.runningScore;
  }
};

Frame.prototype.frameThree = function (x, y) {
  this.score.f3r1 = x
  this.score.f3r2 = y
  this.score.s3 = x + y
  if (this.score.f2r1 < 10 && this.score.s2 === 10) {
    this.score.s2 += this.score.f3r1
    this.runningScore += (this.score.f3r1 + this.score.s3)
    return this.runningScore;
  } else if (this.score.f2r1 === 10) {
    this.score.s2 += this.score.s3
    this.runningScore += (this.score.s2 + this.score.s3)
    return this.runningScore;
  } else {
    this.runningScore = this.score.s2 + this.score.s3
    return this.runningScore;
  }
};

// Frame.prototype.frameFour = function (x, y) {
//   this.score.f4r1 = x
//   this.score.f4r2 = y
//
// };
//
// Frame.prototype.frameFive = function (x, y) {
//   this.score.f5r1 = x
//   this.score.f5r2 = y
//
// };
//
// Frame.prototype.frameSix = function (x, y) {
//   this.score.f6r1 = x
//   this.score.f6r2 = y
//
// };
//
// Frame.prototype.frameSeven = function (x, y) {
//   this.score.f7r1 = x
//   this.score.f7r2 = y
//
// };
//
// Frame.prototype.frameEight = function (x, y) {
//   this.score.f8r1 = x
//   this.score.f8r2 = y
//
// };
//
// Frame.prototype.frameNine = function (x, y) {
//   this.score.f9r1 = x
//   this.score.f9r2 = y
//
// };
//
// Frame.prototype.frameTen = function (x, y, z) {
//   this.score.f10r1 = x
//   this.score.f10r2 = y
//   this.score.f10r3 = z
// };
//
//






// Frame.prototype.frameTwo = function (x, y) {
//   frameTwoInfo = [];
//
//   frameTwoInfo.push(x);
//   frameTwoInfo.push(y);
//
//   if ( x === 10 ) {
//   frameTwoInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameTwoInfo.push('spare')
// }
//
//   this.runningScore += frameOneInfo[0]
//   this.runningScore += frameOneInfo[1]
//   return this.runningScore;
//
// };
//
// Frame.prototype.frameThree = function (x, y) {
//   frameThreeInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameThreeInfo.push(x);
//   frameThreeInfo.push(y);
//
//   if ( x === 10 ) {
//   frameThreeInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameThreeInfo.push('spare')
// }
//
//   return frameThreeInfo;
// };
//
//
// Frame.prototype.frameFour = function (x, y) {
//   frameFourInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameFourInfo.push(x);
//   frameFourInfo.push(y);
//
//   if ( x === 10 ) {
//   frameFourInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameFourInfo.push('spare')
// }
//
//   return frameFourInfo;
// };
//
//
// Frame.prototype.frameFive = function (x, y) {
//   frameFiveInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameFiveInfo.push(x);
//   frameFiveInfo.push(y);
//
//   if ( x === 10 ) {
//   frameFiveInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameFiveInfo.push('spare')
// }
//
//   return frameFiveInfo;
// };
//
//
// Frame.prototype.frameSix = function (x, y) {
//   frameSixInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameSixInfo.push(x);
//   frameSixInfo.push(y);
//
//   if ( x === 10 ) {
//   frameSixInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameSixInfo.push('spare')
// }
//
//   return frameSixInfo;
// };
//
//
// Frame.prototype.frameSeven = function (x, y) {
//   frameSevenInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameSevenInfo.push(x);
//   frameSevenInfo.push(y);
//
//   if ( x === 10 ) {
//   frameSevenInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameSevenInfo.push('spare')
// }
//
//   return frameSevenInfo;
// };
//
//
// Frame.prototype.frameEight = function (x, y) {
//   frameEightInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameEightInfo.push(x);
//   frameEightInfo.push(y);
//
//   if ( x === 10 ) {
//   frameEightInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameEightInfo.push('spare')
// }
//
//   return frameEightInfo;
// };
//
//
// Frame.prototype.frameNine = function (x, y) {
//   frameNineInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameNineInfo.push(x);
//   frameNineInfo.push(y);
//
//   if ( x === 10 ) {
//   frameNineInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameNineInfo.push('spare')
// }
//
//   return frameNineInfo;
// };
//
//
// Frame.prototype.frameTen = function (x, y, z) {
//   frameTenInfo = [];    // Told not to do this but test fails with var in front?!
//
//   frameTenInfo.push(x);
//   frameTenInfo.push(y);
//
//   if ( x === 10 ) {
//   frameTenInfo.push('strike');
// } else if ( x != 10 && x + y === 10 ) {
//   frameTenInfo.push('spare')
// }
//
//   frameTenInfo.push(z);
//
//   return frameTenInfo;
// };

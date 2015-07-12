
function BowlingCounter () {
  this.frameSum         = [];
  this.arrayPinsPerBall = [];
  this.arrayOfFrames    = [];
  this.ballCounter      = 0;
  this.accumulatedScore = 0;
};

BowlingCounter.prototype.getPinsPerBalls = function () {
  var args = Array.prototype.slice.call(arguments);
  this.arrayPinsPerBall = args;
  
  this.operator()
};

BowlingCounter.prototype.operator = function () {
  while(this.arrayPinsPerBall.length > 0 ){
     // resetFrameSum()
    this.arrayOfFrames.push(this.makeFrameSum(this.getFrameValues()));
  }
};

BowlingCounter.prototype.getFrameValues = function () {
  var frame = []

  if(this.strike()) {
    frame = this.arrayPinsPerBall.splice(0,1);
  }
  else {
    frame = this.arrayPinsPerBall.splice(0,2);
  }
  return frame;
};

BowlingCounter.prototype.makeFrameSum = function (value) {
  var concatValue = []
  this.increaseBallCounterByTwo();
  
  if(this.isPairOfBalls(value)) {
    this.frameSum = this.reduceFrame(value);
    this.spareDetector()
  }
  else {
    concatValue = value.concat(this.arrayPinsPerBall.slice(0,2))
    this.frameSum = this.reduceFrame(concatValue);
  }
  return this.frameSum;
};

BowlingCounter.prototype.reduceFrame = function (frame) {
  return frame.reduce(function (a, b) {
    return(a + b);
  });
};

BowlingCounter.prototype.flattenArray = function (arr) {
  return [].concat.apply([],arr);
};

BowlingCounter.prototype.score = function () {
  return this.arrayOfFrames.reduce(function (a,b) {
    return a + b;
  });
};

BowlingCounter.prototype.increaseBallCounterByTwo = function () {
  this.ballCounter += 2
};


BowlingCounter.prototype.resetFrameSum = function () {
   this.frameSum.length = 0
};

BowlingCounter.prototype.spareDetector = function () {
  if (this.spare()) {
    concatValue = [10].concat(this.arrayPinsPerBall.slice(0,1))
    this.frameSum = this.reduceFrame(concatValue);
  }
};

BowlingCounter.prototype.spare = function () {
  return this.frameSum === 10;
};

BowlingCounter.prototype.strike = function () {
  return this.arrayPinsPerBall[0] === 10;
};

BowlingCounter.prototype.isPairOfBalls = function (value) {
  return value.length === 2;
};



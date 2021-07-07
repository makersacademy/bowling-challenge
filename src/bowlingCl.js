function BowlingCl () {

this._currentFrameScores = []
this._runningTotal = []
this._previousFrame = []
this.STRIKE_COUNT = 0
this.FRAME_COUNT = 0

};


BowlingCl.prototype.inputFrame = function(roll1, roll2) {

  var string = roll1;
  var rollnumber1 = string*1;
  var string2 = roll2;
  var rollnumber2 = string2*1;

if(this.FRAME_COUNT != 10) {
this.FRAME_COUNT++;
}

this.storePreviousFrame();

this._currentFrameScores = []
this._currentFrameScores.push(rollnumber1, rollnumber2);

if(this.isAStrike(this._currentFrameScores) && (this.isASpare(this._previousFrame))) {
  this.calculateSpare();
} else if(this.isAStrike(this._previousFrame) || this.isAStrike(this._currentFrameScores)) {

  this.calculateStrike();
} else if(this.isASpare(this._previousFrame)) {
  this.calculateSpare();
} else {
  this._runningTotal.push(rollnumber1, rollnumber2);
}

};


BowlingCl.prototype.storePreviousFrame = function() {

  this._previousFrame = []
  this._previousFrame.push(this._currentFrameScores[0])
  this._previousFrame.push(this._currentFrameScores[1])
}

BowlingCl.prototype.getFrameTotal = function() {
  return this._currentFrameScores[0] + this._currentFrameScores[1];
}

BowlingCl.prototype.isAStrike = function(array) {
  return (array[0] === 10)
}

BowlingCl.prototype.isASpare = function(array) {
  return ((array[0] + array[1] === 10) && (array[0] != 10))
}

BowlingCl.prototype.calculateSpare = function() {
  if(this.FRAME_COUNT != 10) {

  if(this.isAStrike(this._currentFrameScores)) {
    this._runningTotal.push(this._currentFrameScores[0], this._currentFrameScores[1])
    this.STRIKE_COUNT++;
  } else {
    this._runningTotal.push(this._currentFrameScores[0], this._currentFrameScores[0], this._currentFrameScores[1])
  }
} else {
  this._runningTotal.push(this._currentFrameScores[0])
};
};


BowlingCl.prototype.calculateStrike = function() {


  if (this.STRIKE_COUNT <= 1 && this.isAStrike(this._currentFrameScores)) {

    this._runningTotal.push(0);
    this.STRIKE_COUNT++;
  }

  else if (this.STRIKE_COUNT >= 2 && this.isAStrike(this._currentFrameScores)) {
    this._runningTotal.push(30);
    this.STRIKE_COUNT++;
  }

  else if (this.STRIKE_COUNT === 1 && !this.isAStrike(this._currentFrameScores)) {
    if(this.FRAME_COUNT != 10) {
    this._runningTotal.push(10, this._currentFrameScores[0], this._currentFrameScores[1], this._currentFrameScores[0], this._currentFrameScores[1] )
  } else {
    this._runningTotal.push(10, this._currentFrameScores[0], this._currentFrameScores[1])
  }
    this.STRIKE_COUNT = 0;
  }

  else if (this.STRIKE_COUNT >= 2 && !this.isAStrike(this._currentFrameScores)) {
    this._runningTotal.push(20, this._currentFrameScores[0], 10, this._currentFrameScores[0], this._currentFrameScores[1], this._currentFrameScores[0], this._currentFrameScores[1])
    this.STRIKE_COUNT = 0;
  }
  else {
      console.log("yyyyyy")
  }
};

BowlingCl.prototype.getRunningTotal = function() {

  var total = 0

  for(var i = 0; i < this._runningTotal.length; i++) {
    total += this._runningTotal[i];
  }
  return total

}

BowlingCl.prototype.reset = function() {
  this._runningTotal = [];
  this.FRAME_COUNT = 0;
  this._currentFrameScores = [];
  this._previousFrame = [];
  this.STRIKE_COUNT = 0;
};

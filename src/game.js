function Game() {
  this.frames = [];
  this._setup();
  this.isOver = false;
}

Game.prototype._setup = function () {
  for (var i = 0; i < (this._default.numberOfFrames - 1); i++) {
    this.frames.push(new Frame(i));
  }
  this.frames.push(new LastFrame(9));
  this.currentFrame = this.frames[0];
};

Game.prototype.roll = function (number) {
  this.currentFrame.roll(number);
  if(this.currentFrame.isFinished()) { this._changeFrame(); }
};

Game.prototype.score = function () {
  var sum = 0;
  for (var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].isStrike()) { this.strikeBonus(this.frames[i]); }
    if (this.frames[i].isSpare()) { this.spareBonus(this.frames[i]); }
    sum += (this.frames[i].totalScore());
  }
  return sum;
};


Game.prototype._changeFrame = function () {
  if ((this.currentFrame.number) === this._default.numberOfFrames - 1){
    this.isOver = true;
    return this.isOver;
   }
  this.currentFrame = this.frames[this.currentFrame.number + 1];
  console.log(this.currentFrame.number);
  console.log(this.score());
};


Game.prototype.strikeBonus = function (frame) {
  frame.bonus = arraySum(this.nextTwoRolls(frame));
};

Game.prototype.spareBonus = function (frame) {
  frame.bonus = arraySum(this.nextRoll(frame));
};

Game.prototype.nextTwoRolls = function (frame) {
  if (this._nextTwoFramesRolls(frame).length === 0) { return [0,0]; }
  if (this._nextTwoFramesRolls(frame).length === 1) {
    return this.nextRoll(frame);
  }
  return [this._nextTwoFramesRolls(frame)[0],
          this._nextTwoFramesRolls(frame)[1]];
};

Game.prototype.nextRoll = function (frame) {
  if (this._nextTwoFramesRolls(frame).length === 0) {return [0]; }
  return [this._nextTwoFramesRolls(frame)[0]];
};

Game.prototype._nextTwoFramesRolls = function (frame) {
  var nextTwoFrames = [
    undHelper(this.frames[frame.number+1]) ? 0 : this.frames[frame.number+1],
    undHelper(this.frames[frame.number+2]) ? 0 : this.frames[frame.number+2],
  ];
  return rollsFromFrame(nextTwoFrames);
};

Game.prototype._default = {
  numberOfFrames: 10,
  numberOfPins: 10
};

function rollsFromFrame(twoFrames){
  twoFrames[0] = twoFrames[0].rolls;
  twoFrames[1] = twoFrames[1].rolls;
  var rolls = twoFrames.reduce(function(a, b) { return a.concat(b);}, []);
  return rolls;
}

function undHelper(thingToCompare) {
  return typeof thingToCompare === 'undefined';
}

function arraySum(arr){
  var sum = arr.reduce(function(a, b) { return a + b; }, 0);
  return undHelper(sum) ? 0 : sum;
}

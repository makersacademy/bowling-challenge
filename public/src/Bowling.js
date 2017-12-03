function Bowling() {
 this.points = [0]
 this.pointsBonus = [0]
 this.lastScore = 0
 this.actualFrame = 1
 this.frames = ['Frames', new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame() ]
};

Bowling.prototype.throw = function(score) {
  this.lastScore = score
  return this.lastScore
};

Bowling.prototype.record = function() {
  this.points.push(this.lastScore);
};

Bowling.prototype.recordInFrame = function(score) {
  this.frames[this.actualFrame].framePoints.push(score)
};

Bowling.prototype.throw_record = function(score) {
  this.throw(score);
  this.record();
  this.recordInFrame(score)
  this.reducePins(score);
  this.spareBonus();
  this.strikeBonus();
};

Bowling.prototype.reducePins = function(n) {
  (this.frames[this.actualFrame].pins) -= n
};

Bowling.prototype.increaseActualFrame = function () {
  if (this.frames[this.actualFrame].framePoints.length === 2) {
    this.actualFrame += 1
  } else if (this._isStrike()) {
    this.actualFrame += 1
  }
};

Bowling.prototype._isGutter = function() {
  if (bowling.points.reduce((a, b) => a + b) === 0 && bowling.points.length === 21) this.points.push(20);
};

Bowling.prototype.resetPoint_Lscore_turn = function() {
  this.points = [0]
  this.lastScore = 0
  this.turn = 1
  this.actualFrame = 1
};

Bowling.prototype.spareBonus = function () {
  if (this.frames[this.actualFrame].framePoints.length === 1) {
    if (this._wasSpare()) {
      this.frames[this.actualFrame - 1].framePoints[1] += this.lastScore
      this.pointsBonus.push(this.lastScore)
    }
  }
};

Bowling.prototype.strikeBonus = function () {
  if ( this._wasStrike1() && this.frames[this.actualFrame].framePoints.length === 2) {
    this.frames[this.actualFrame - 1].framePoints[0] += this.frames[this.actualFrame].framePoints[0] + this.frames[this.actualFrame].framePoints[1]
    this.pointsBonus.push(this.frames[this.actualFrame].framePoints[0] + this.frames[this.actualFrame].framePoints[1])
  }
  if ( this.frames[this.actualFrame].framePoints.length === 1 && this._wasStrike1() && this._wasStrike2() ) {
    this.frames[this.actualFrame - 2].framePoints[0] += (this.frames[this.actualFrame - 1].framePoints[0]) + (this.frames[this.actualFrame].framePoints[0])
    this.pointsBonus.push((this.frames[this.actualFrame - 1].framePoints[0]) + (this.frames[this.actualFrame].framePoints[0]))
  }
};

Bowling.prototype._wasStrike1 = function () {
 return this.frames[this.actualFrame - 1].pins === 0 && this.frames[this.actualFrame - 1].framePoints[0] === 10
};

Bowling.prototype._wasStrike2 = function () {
 return this.frames[this.actualFrame - 2].pins === 0 && this.frames[this.actualFrame - 2].framePoints[0] === 10
};

Bowling.prototype._wasSpare = function () {
  return this.frames[this.actualFrame - 1].pins === 0 && this.frames[this.actualFrame - 1].framePoints[0] != 10
};

Bowling.prototype._isStrike = function () {
  return this.frames[this.actualFrame].pins === 0 && this.frames[this.actualFrame].framePoints[0] === 10
};

Bowling.prototype.wholeGameScore = function () {
  return bowling.points.reduce((a, b) => a + b) + bowling.pointsBonus.reduce((a, b) => a + b)
};

function Bowling() {
 this.points = [0]
 this.lastScore = 0
 // this.turn = 1
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
  this.recordInFrame(score)
  this.spareBonus();
  this.reducePins(score);
  this.record();
};

Bowling.prototype.reducePins = function(n) {
  (this.frames[this.actualFrame].pins) -= n
};

// Bowling.prototype.increaseTurn = function () { //now turn increase by 2 if strike
//   if (this._isStrike()) {
//     this.turn += 2
//   } else {
//     this.turn += 1
//   }
// };

Bowling.prototype.increaseActualFrame = function () {  //now actualframe increase by 1 if strike also if is your first roll
  if (this.frames[this.actualFrame].framePoints.length === 2) {
    this.actualFrame += 1
  } else if (this._isStrike()) {
    this.actualFrame += 1
  }
};

Bowling.prototype.isGutter = function() {
  if (bowling.points.reduce((a, b) => a + b) === 0) this.points.push(20);
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
      // this.points[this.turn - 1] + this.lastScore DO I STILL NEED THE POINTS ARRAY FOR THE FINAL SCORE?
      this.frames[this.actualFrame - 1].framePoints[1] += this.lastScore
    }
  }
};

Bowling.prototype.strikeBonus = function () {
  if ( this._wasStrike1() && this.frames[this.actualFrame].framePoints.length === 2) {
    this.frames[this.actualFrame - 1].framePoints[0] += this.frames[this.actualFrame].framePoints[0] + this.frames[this.actualFrame].framePoints[1]
  }
  if ( this.frames[this.actualFrame].framePoints.length === 1 && this._wasStrike1() && this._wasStrike2() ) {
    this.frames[this.actualFrame - 2].framePoints[0] += (this.frames[this.actualFrame - 1].framePoints[0]) + (this.frames[this.actualFrame].framePoints[0])
  }
};

Bowling.prototype._wasStrike1 = function () {  // do i still need the pins? can't I just check famePoints?
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


//Start new game feature not working
// Do i still need .this.points ? I think i am only using it to get the final score. Can't i get it from the frames?
// Use sparebonus2 in the interface intead of sparebonus
// The bonus for a spare should be showed in the previous frame.
// add a written when the user does spare!
// add a button to decide the score to do in the interface.
// change name of the variables in the frames from first/second strike to first second roll. English wrong

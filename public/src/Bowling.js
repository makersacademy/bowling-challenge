function Bowling() {
 this.points = [0]
 this.lastScore = 0
 this.turn = 1
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
  if (this.turn % 2 === 0) this.frames[this.actualFrame].secondStrike = score;
  if (this.turn % 2 != 0) this.frames[this.actualFrame].firstStrike = score;
};

Bowling.prototype.throw_record = function(score) {
  this.throw(score);
  this.recordInFrame(score)
  this.spareBonus();
  this.strikeBonus();
  this.reducePins(score);
  this.record(); //If u pass score u don't need anymore this.last score
};

Bowling.prototype.reducePins = function(n) {
  (this.frames[this.actualFrame].pins) -= n
};

Bowling.prototype.increaseTurn = function () {
  this.turn += 1
};

Bowling.prototype.increaseActualFrame = function () {
  if (this.turn % 2 === 0) this.actualFrame += 1
};

Bowling.prototype.IsGutter = function() {
  if (bowling.points.reduce((a, b) => a + b) === 0) this.points.push(20);
};

Bowling.prototype.resetPoint_Lscore_turn = function() {
  this.points = []
  this.lastScore = 0
  this.turn = 0
};

Bowling.prototype.spareBonus = function () {
  if (this.turn % 2 != 0) {
    if (this.frames[this.actualFrame - 1].pins === 0 && this.frames[this.actualFrame - 1].firstStrike != 10 ) {
      this.lastScore += this.frames[this.actualFrame].firstStrike
    }
  }
};

// Bowling.prototype.strikeBonus = function () {
//   if (this.turn % 2 === 0) {
//     if (this.frames[this.actualFrame - 1].pins === 0 && this.frames[this.actualFrame - 1].firstStrike === 10 && this.frames[this.actualFrame -1].secondStrike === 0 ) {
//       this.lastScore += this.frames[this.actualFrame].firstStrike + this.frames[this.actualFrame].secondStrike
//     }
//   }
// };

// Bowling.prototype.isStrike = function () {
//   if (this.frames[this.actualFrame].firstStrike === 10) {
//     this.increaseTurn();
//     this.increaseActualFrame();
//   }
// };

'use strict';

function Bowling(player) {
  this.player = player
  this.totalScore = 0;
  this._currentIndex = 0;
  this._BONUS_FRAME = {frame: 10, roll: 3, pins: "", score:"", notes: ""};
  this._DEFAULT_SCORE_SHEET = [
    {frame: 1, roll: 1, pins: "", score:"", notes: ""},
    {frame: 1, roll: 2, pins: "", score:"", notes: ""},
    {frame: 2, roll: 1, pins: "", score:"", notes: ""},
    {frame: 2, roll: 2, pins: "", score:"", notes: ""},
    {frame: 3, roll: 1, pins: "", score:"", notes: ""},
    {frame: 3, roll: 2, pins: "", score:"", notes: ""},
    {frame: 4, roll: 1, pins: "", score:"", notes: ""},
    {frame: 4, roll: 2, pins: "", score:"", notes: ""},
    {frame: 5, roll: 1, pins: "", score:"", notes: ""},
    {frame: 5, roll: 2, pins: "", score:"", notes: ""},
    {frame: 6, roll: 1, pins: "", score:"", notes: ""},
    {frame: 6, roll: 2, pins: "", score:"", notes: ""},
    {frame: 7, roll: 1, pins: "", score:"", notes: ""},
    {frame: 7, roll: 2, pins: "", score:"", notes: ""},
    {frame: 8, roll: 1, pins: "", score:"", notes: ""},
    {frame: 8, roll: 2, pins: "", score:"", notes: ""},
    {frame: 9, roll: 1, pins: "", score:"", notes: ""},
    {frame: 9, roll: 2, pins: "", score:"", notes: ""},
    {frame: 10, roll: 1, pins: "", score:"", notes: ""},
    {frame: 10, roll: 2, pins: "", score:"", notes: ""},
  ];
  this.scoreSheet = this._DEFAULT_SCORE_SHEET;
}

Bowling.prototype.knockedDown = function(pins) {
  this.scoreSheet[this._currentIndex]["pins"] = pins;
  this.totalScore += pins;
  if (this._isGutter(pins)) { this._gutter(); }
  if (this._isAfterStrike()) { this._strikeBonus(); }
  if (this._isAfterSpare()) { this._spareBonus(); }
  if (this._isStrike(pins)) { this._strike(); }
  if (this._isSecondRoll() || this._isFinalRoll()) { this._updateScore(); }
  if (this._isSpare(pins)) { this._spare(); }
  if (!this._isFinalRoll()) { this._currentIndex++; }
}


Bowling.prototype._isFirstRoll = function() {
  return this._currentRoll() === 1;
};

Bowling.prototype._isSecondRoll = function() {
  return this._currentRoll() === 2;
};

Bowling.prototype._isFinalRoll = function() {
  return (this._currentIndex + 1) === this.scoreSheet.length;
}

Bowling.prototype._updateScore = function() {
  this.scoreSheet[this._currentIndex]["score"] = this.totalScore;
};

Bowling.prototype._isGutter = function(pins) {
  return pins == 0
}

Bowling.prototype._gutter = function() {
  this._currentNotes("Bad luck");
};

Bowling.prototype._isStrike = function(pins) {
  return pins === 10 && this._isFirstRoll()
};

Bowling.prototype._strike = function() {
  if (this._isTenthFrame()) { this._addBonusRoll(); }
  this._currentNotes("Strike");
  if (!this._isTenthFrame()) { this._currentIndex++; }
  if (this._isAfterStrike()) { this._strikeBonus(); }
};

Bowling.prototype._isAfterStrike = function() {
  return this._currentIndex > 1 && this.scoreSheet[this._currentIndex - 2]["pins"] === "";
};

Bowling.prototype._strikeBonus = function() {
  var bonus = parseFloat(this._currentPins() + this.scoreSheet[this._currentIndex - 1]["pins"]);
  this.scoreSheet[this._currentIndex - 2]["score"] = this.totalScore;
  this.totalScore += bonus;
  var note = `Strike: 10 pins plus bonus of ${bonus} from next frame (rolls 1 and 2 from frame ${this._currentFrame()})`;
  this.scoreSheet[this._currentIndex - 2]["notes"] = note;
};

Bowling.prototype._isSpare = function(pins) {
  return this._isSecondRoll() && (pins + this.scoreSheet[this._currentIndex - 1]["pins"] === 10);
}

Bowling.prototype._spare = function() {
  if (this._isTenthFrame()) { this._addBonusRoll(); }
  this.scoreSheet[this._currentIndex]["score"] = "";
  this._currentNotes("Spare");
};

Bowling.prototype._isAfterSpare = function() {
  return this._currentIndex > 1 && this.scoreSheet[this._currentIndex - 1]["notes"] === "Spare";
};

Bowling.prototype._spareBonus = function() {
  this.scoreSheet[this._currentIndex - 1]["score"] = this.totalScore;
  var bonus = this._currentPins();
  this.totalScore += bonus;
  var note = `Spare: 10 pins plus bonus of ${bonus} from next roll (roll 1 frame ${this._currentFrame()})`;
  this.scoreSheet[this._currentIndex - 1]["notes"] = note;
};

Bowling.prototype._isTenthFrame = function() {
  return this._currentFrame() === 10;
}

Bowling.prototype._addBonusRoll = function() {
  this.scoreSheet[20] = this._BONUS_FRAME;
}

Bowling.prototype._currentFrame = function() {
  return this.scoreSheet[this._currentIndex]["frame"];
};

Bowling.prototype._currentRoll = function() {
  return this.scoreSheet[this._currentIndex]["roll"];
};

Bowling.prototype._currentPins = function() {
  return this.scoreSheet[this._currentIndex]["pins"];
};

Bowling.prototype._currentScore = function() {
  return this.scoreSheet[this._currentIndex]["score"];
};

Bowling.prototype._currentNotes = function(value) {
  if (value) {
    this.scoreSheet[this._currentIndex]["notes"] = value;
  } else {
    return this.scoreSheet[this._currentIndex]["notes"];
  }
};

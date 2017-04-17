var Bowling = function Bowling() {
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.thirdRollScore = 0
  this.frameNumber = 1
  this.totalScore = 0
  this.bonusPoints = 0
  this.spare = 0
  this.strike = 0
  this.lastStrike = 0
  this.lastSpare = 0
  this.rollCounter = 1
};

Bowling.prototype.firstRoll = function(number) {
  this._isGameOver();
  if (this._isInvalid(number)) throw new Error('That is an invalid number');
  if (this._isAStrike(number)) this._processStrikes();
  if (this.frameNumber === 10 && number === 10) this.lastStrike += 1;
  if (this._sparesExist()) this._processSpares(number);
  if (number < 10) this.rollCounter += 1;
  this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  this._isGameOver();
  if (this._exceedsTenPins(number)) throw new Error('There are only 10 pins');
  if (this._isASpare(number)) this.spare += 1;
  if (this.frameNumber === 10 && this.firstRollScore + number === 10) this.lastSpare += 1;
  if (this._hasJustOneStrike()) this._calculatesOneStrike(number);
  if (this._hasConsecutiveStrikes()) this._calculatesAllStrikes(number);
  this.lastStrike + this.lastSpare > 0 ? this._tenthBonus(number) : this._processFrame(number);
};

Bowling.prototype.thirdRoll = function(number) {
  this.thirdRollScore = number
  this._countsTotalScore();
};

Bowling.prototype._countsTotalScore = function() {
  this.totalScore += (this.firstRollScore + this.secondRollScore + this.bonusPoints + this.thirdRollScore)
  this.frameNumber += 1
  this._reset();
};

Bowling.prototype._calculatesOneStrike = function(number) {
  this.bonusPoints += (this.firstRollScore + number)
  this.strike = 0
};

Bowling.prototype._calculatesAllStrikes = function(number) {
  this.bonusPoints = ((this.strike - 1) * 2 - 1) * 10 + this.firstRollScore * 2 + number
  this.strike = 0
};

Bowling.prototype._processStrikes = function() {
  this.strike += 1
  this.firstRollScore = 10
  this._countsTotalScore();
};

Bowling.prototype._processSpares = function(number) {
  this.bonusPoints += number
  this.spare = 0
};

Bowling.prototype._processFrame = function(number) {
  this.secondRollScore = number
  this._countsTotalScore();
};

Bowling.prototype._reset = function() {
  this.bonusPoints = 0
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.thirdRollScore = 0
  this.rollCounter = 1
};

Bowling.prototype._isInvalid = function(number) {
  return number < 0 || number > 10
};

Bowling.prototype._exceedsTenPins = function(number) {
  return (number + this.firstRollScore > 10) && (this.frameNumber < 10)
};

Bowling.prototype._isAStrike = function(number) {
  return number === 10 && this.frameNumber < 10
};

Bowling.prototype._isASpare = function(number) {
  return this.firstRollScore + number === 10
};

Bowling.prototype._sparesExist = function() {
  return this.spare > 0
};

Bowling.prototype._hasJustOneStrike = function() {
  return this.strike === 1
};

Bowling.prototype._hasConsecutiveStrikes = function() {
  return this.strike > 1
};

Bowling.prototype._tenthBonus = function(number) {
  this.secondRollScore = number
  this.rollCounter += 1
};

Bowling.prototype._isGameOver = function() {
  if (this.frameNumber > 10) throw new Error('Game is over');
};

Game = function(){
  this.FramesInGame = 10
  this.RollsInFrame = 2
  this.TotalPinsInGame = 10
  this.rolls = []
  this.results = []
  this.pins = this.TotalPinsInGame
  this.hitByFirstRoll = null
  this.hitBySecondRoll = null
  this.total = []
  this.frameNumber = 1
  this.tempArray = []
  this.rollsNeededToCalculateRegularFrame = 2
  this.rollsNeededToCalculateStrikeOrSpareFrame = 3
};

Game.prototype.playRoll = function(){
  if (this.rolls.length < (this.FramesInGame*this.RollsInFrame)) {
    this.playRegularRoll()
  } else if (this.results.length < this.FramesInGame) {
    this.playExtraRoll()
  };
};

Game.prototype.playRegularRoll = function(){
  if (!this._isFirstRollPlayed()) {
    this.playFirstRoll();
    this.calculateIfPossible()
  } else if (this._isFirstRollPlayed()){
    this.playSecondRoll();
    this.calculateIfPossible()
    this.calculateIfPossible()
    this.endFrame()
    this.nextFrame()
  };
};

Game.prototype.playExtraRoll = function(){
  if (!this._isFirstRollPlayed()) {
    this.playFirstRoll();
    this.calculateIfPossible()
  } else if (this._isFirstRollPlayed()){
    this.playSecondRoll();
    this.calculateIfPossible()
  };
};

Game.prototype.playFirstRoll = function(){
  this.firstRoll();
  this._addPinsHitByFirstRollToTable();
  if (this._isCurrentFrameStrike()) {
    this._addPinsHitBySecondRollToTable()
    this.endFrame()
    this.nextFrame()
  };
};

Game.prototype.playSecondRoll = function(){
  this.secondRoll();
  this._addPinsHitBySecondRollToTable();
};

Game.prototype.firstRoll= function(){
  this.hitByFirstRoll = this._hit()
  this.pins -= this.hitByFirstRoll
};

Game.prototype._addPinsHitByFirstRollToTable= function(){
  this.rolls.push(this.hitByFirstRoll);
  this.tempArray.push(this.hitByFirstRoll);
};

Game.prototype.secondRoll= function(){
  if (!this._isCurrentFrameStrike()){
    this.hitBySecondRoll = this._hit()
  };
};

Game.prototype._addPinsHitBySecondRollToTable= function(){
  this.rolls.push(this.hitBySecondRoll);
  if (this._isSecondRollPlayed()) {
    this.tempArray.push(this.hitBySecondRoll)
  };
};

Game.prototype.nextFrame = function(){
  if (this.frameNumber <this.FramesInGame) {
    this.frameNumber+=1
  };
};

Game.prototype.endFrame= function(){
  this.hitByFirstRoll = null
  this.hitBySecondRoll = null
  this.pins = this.TotalPinsInGame
};

Game.prototype._isFirstRollPlayed = function(){
  return (this.hitByFirstRoll!==null)
};

Game.prototype._isSecondRollPlayed = function(){
  return (this.hitBySecondRoll!==null)
};

Game.prototype._isCurrentFrameStrike = function(){
  return this.hitByFirstRoll == this.TotalPinsInGame
};

Game.prototype._hit = function(){
  return Math.floor(Math.random()*(this.pins + 1))
};

// Calculation

Game.prototype.calculateIfPossible = function(){
  if (this.isCalculationPossible()) {
    this._addResultToTable();
    this._calculateTotal();
    this._deleteRollsThatWereCalculated();
  };
};

Game.prototype.isCalculationPossible = function(){
  if (this._isCalculationPossibleForRegularFrame()){
    return true
  } else if (this._isCalculationPossibleForStrikeOrSpareFrame()) {
    return true
  } else {
    return false
  };
};

Game.prototype._isCalculationPossibleForRegularFrame = function(){
  return ((this._isFrameBeingCalculatedRegular()) && (this.tempArray.length==this.rollsNeededToCalculateRegularFrame))
};

Game.prototype._isCalculationPossibleForStrikeOrSpareFrame = function(){
  return (this.tempArray.length == this.rollsNeededToCalculateStrikeOrSpareFrame)
};

Game.prototype._addResultToTable = function(){
  this.results.push(this._calculateFrame())
};

Game.prototype._calculateFrame = function(){
  var total = 0;
  for(var i in this.tempArray) { total += this.tempArray[i]; };
  return total
};

Game.prototype._calculateTotal = function(){
  total = 0
  for(var i in this.results) { total += this.results[i]; };
  this.total.push(total)
};

Game.prototype._deleteRollsThatWereCalculated = function(){
  if (this._isFrameBeingCalculatedStrike()) {
    this.tempArray.shift()
  } else {
    this.tempArray.shift()
    this.tempArray.shift()
  };
};

Game.prototype._isFrameBeingCalculatedRegular = function(){
  return ((this.tempArray[0]+this.tempArray[1]) < this.TotalPinsInGame)
};

Game.prototype._isFrameBeingCalculatedStrike = function(){
  return (this.tempArray[0] == this.TotalPinsInGame)
};


//Uncomment below to play in console

// Game.prototype.play = function(){
//   while (this.results.length < 10) {
//     this.playRoll()
//   };
//   console.log(this.rolls)
//   console.log(this.results)
//   console.log(this.total)
// };



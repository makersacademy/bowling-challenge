function BowlingGame() {
  this._frameScore = new Array(10).fill(0);
  this._rolls = new Array(2).fill().map(() => Array(10).fill(0));
  this._bonus = new Array(2).fill().map(() => Array(10).fill(0));
  this._rollsCounter = 0;
  this._totalRolls = 20;
  this._strike = false;
  this._spare = false;
  this._turnExtension = 0;
  this.totalScore = 0;
}

BowlingGame.prototype.getFrameScore = function(round){
  return this._frameScore[round];
}

BowlingGame.prototype.getRolls = function(roll,round){
  return this._rolls[roll][round];
}

BowlingGame.prototype.getBonus = function(roll,round){
  return this._bonus[roll][round];
}

BowlingGame.prototype.throwBall = function(numberOfPins){
  
  if (this.isNumberOfPinsNotAcceptable(numberOfPins)){
   
    throw Error("Had too much White Russian? There must be a total of pins = 10 for each frame..")
  } 
  
  this._rolls[this.currentRow()][this.currentColumn()] += numberOfPins;
  this.addBonus(numberOfPins);
    
  if (this.isStrike(numberOfPins)){
    this._strike = true;
    this._rollsCounter ++; 
  } else if (this.isSpare(numberOfPins)){
    this._spare = true;
  } 
  
  this.updateFrameScore();
  if(this.isOver()) this._gameOver();
  this._rollsCounter ++;
}

BowlingGame.prototype.isOver = function(){
  if (this.isFinalRound() && (this._spare) && this._turnExtension < 1) {
    this._turnExtension ++;
    this._rollsCounter -=1;
    return false;
  } else if ((this._rollsCounter  == this._totalRolls - 1) && this._strike && this._turnExtension < 1) {
    this._turnExtension ++;
    this._rollsCounter -= 2;
    
    console.log ("turnexte", this._turnExtension);
    console.log ("rollscounter", this._rollsCounter);
  } 
  if (this.isFinalRound() && !(this._strike || this._spare)) return true;
  return false;
}

BowlingGame.prototype._gameOver = function(){
  console.log(this.calculateScore());
  this.updateFrameScore();
  throw Error("game over");
}

BowlingGame.prototype.isFinalRound = function(){
  return this._rollsCounter == this._totalRolls
}

BowlingGame.prototype.updateFrameScore = function(){
  // this needs to be more efficient check it out later
  // Math.floor(this._rollsCounter) / 2
  for(let i = 0; i < 10; i++){
    this._frameScore[i] = this._bonus[0][i] + this._bonus[1][i] + this._rolls[0][i] + this._rolls[1][i]
  }
}

BowlingGame.prototype._isFirstRoll = function(){
  // console.log("isFirstRoll returns", this._rollsCounter % 2 === 0)
  return this._rollsCounter % 2 === 0;
}

BowlingGame.prototype.isStrike = function (numberOfPins) {
  // console.log("is strike returns", this.isFirstRoll() && numberOfPins === 10)
  return this._isFirstRoll() && numberOfPins === 10;
}

BowlingGame.prototype.isSpare = function (numberOfPins) {
  return !this._isFirstRoll() && ((this._rolls[0][this.currentColumn()] + numberOfPins) === 10);
}

BowlingGame.prototype.isNumberOfPinsNotAcceptable = function (numberOfPins) {
  if (this._isFirstRoll()) return numberOfPins > 10 || numberOfPins < 0;
  return (this._rolls[0][this.currentColumn()] + numberOfPins) > 10 || numberOfPins < 0;
}

BowlingGame.prototype.addBonus = function (numberOfPins){
  if (this._strike){
    this._bonus[this.currentRow()][this.currentColumn()-1] += numberOfPins;
 
    if (this.isDoubleStrike() && this._isFirstRoll() && this._turnExtension == 0){
      this._bonus[1][this.currentColumn()-2] += numberOfPins;
    }
    
    if (!this._isFirstRoll()) this._strike = false;
  } else if (this._spare) {
    this._bonus[this.currentRow()][this.currentColumn()-1] += numberOfPins;
    this._spare = false;
  }
}

BowlingGame.prototype.currentRow = function (){
  return this._rollsCounter % 2;
}

BowlingGame.prototype.currentColumn = function (){
  return Math.floor(this._rollsCounter / 2);
}

BowlingGame.prototype.isDoubleStrike = function (){
  return this._rolls[0][this.currentColumn()-2] === 10
}

BowlingGame.prototype.calculateScore = function(){
  let sum = 0;
  for (let i = 0; i< 10; i++){
    console.log("\n\n\n")
    console.log(i)
    console.log("this-framescore", this._frameScore[i]);
    console.log("framescore", this._frameScore);
    sum +=this._frameScore[i];
  }
  this.totalScore = sum;
  return this.totalScore;
}
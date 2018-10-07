function Game (){
  this._totalScore = 0;
  this._framesLeft = 10;
  this._doubleFirstRollNextRound = false;
  this._doubleBothRollsNextRound = false;
  this.currentFrame = new Frame();
};

Game.prototype.rollBall = function(userInput) {
//   if (this.currentFrame._rollsLeft === 0){
//   this.currentFrame = new Frame(); //remember to pass in user_input   //might not need var here
// } //else {
     this.currentFrame.calculate(userInput);
  //   return new Frame();
  // }
  };

function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
  this.totalScore = 0; // is this needed? if so -- does it belong in Frame?
  this.isGameOver = false;
  this.strikeCount = 0;
}

Game.prototype.rollBall = function(pinsKnocked) {
  this.logRoll(pinsKnocked);
};

Game.prototype.logRoll = function(pinsKnocked) {

  if (this.isGameOver == true) {
    fail('Game Over, please reset the game');
  }

  if (this.currentFrameObject == null) {
    this.currentFrameObject = new Frame(); //create the frame object for every new frame(round)
    this.frameIndex += 1;//
  }

  if (this.currentFrameObject.rollIndex == 0) { //if its on its first roll:
    this.currentFrameObject.firstRoll(pinsKnocked); //update the frame with firstRoll score
    this.checkStrike(); // checks if there was a strike
  } else { // if its on its second roll and there was no strike
    this.currentFrameObject.secondRoll(pinsKnocked); // updates frame with the results of the second roll
    this.scoreSheet.push(this.currentFrameObject); // frame finished add the frame to scoreSheet:
    this.calculateScore(); // calculates score at end of the frame
    this.strikeCount = 0; // resets strike count to 0
    this.gameOver(); // checks if the game is over
    this.currentFrameObject = null; //resets current frame
  }
};

Game.prototype.checkStrike = function() {
  if (this.currentFrameObject.strike == true) {
    this.scoreSheet.push(this.currentFrameObject);
    this.calculateScore();
    this.gameOver();
    this.currentFrameObject = null;
    this.strikeCount += 1;
    return;
  }
};

Game.prototype.strikeCalculator = function()
{
  var strikeCounter = this.strikeCount; // 7   -- 30 / 20 / 10 / 60 + 3 * 4 / 72 + 6
  while (this.strikeCount > 0)
  {
    // this.totalScore += this.strikeCount-- * 10; // X X X X X X X 2-2 = 190 /// 290 // needs to be max of 30
      var frameCalc = this.strikeCount-- * 10;
        if (frameCalc > 30) {
          frameCalc = 30;
        }
      this.totalScore += frameCalc
  }

  if (strikeCounter > 2) {
    strikeCounter = 2
  }

  this.totalScore += (strikeCounter * this.currentFrameObject.totalFrameScore) + this.currentFrameObject.firstRollScore; // 42 but should be 48
};

Game.prototype.calculateScore = function()
{
  if (this.frameIndex != 0 &&
      this.scoreSheet[this.frameIndex - 1].strike == true &&
      this.scoreSheet[this.frameIndex].strike == false)
  {
    console.log('wee');
    this.strikeCalculator();
  }  // if on first frame or if there were no strikes/spares
  else if (this.scoreSheet[this.frameIndex].strike == false &&
           this.scoreSheet[this.frameIndex].spare == false)
  {
    this.totalScore += this.currentFrameObject.totalFrameScore;
  }
};

Game.prototype.gameOver = function() {
  if (this.frameIndex == 9 && this.currentFrameObject.strike == false) {
    this.isGameOver = true;
  }
};

// what happens when there is a half strike?

// game.prototype.resetGame = function() {
//
// }

// next thing to do check if at end of game
// scoresheet in a separate class? - not essential and might not need to.
// keep it neat and modular

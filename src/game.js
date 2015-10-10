function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
  this.totalScore = 0; // is this needed? if so -- does it belong in Frame?
  this.isGameOver = false;
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
    return;
  }
};

Game.prototype.calculateScore = function() {
  // if (this.frameIndex == 0) { // if its the first frame, no strikes/half strikes will have happened.
  //   this.totalScore = this.currentFrameObject.totalFrameScore;
  // }

  if ((this.frameIndex != 0 || this.frameIndex == 0) && (this.currentFrameObject.strike == false && this.currentFrameObject.spare == false)) {
    this.totalScore += this.currentFrameObject.totalFrameScore;

  }
  // if (this.currentFrameObject.strike == true && this.scoreSheet[this.frameIndex - 1].strike == false) { // checking if previous frame was a strike
  //   this.totalScore += this.currentFrameObject
  //
  // }



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

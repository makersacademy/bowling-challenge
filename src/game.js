function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
  this.totalScore = 0; // is this needed?
  this.isGameOver = false;
}

Game.prototype.logRoll = function(pinsKnocked) {

  if (this.isGameOver == true) {
    fail("Game Over, please reset the game")
  }
  if (this.currentFrameObject == null) {
    //create the frame object for every new frame(round)
    this.currentFrameObject = new Frame();
    this.frameIndex += 1;//
  }

  //if its on its first roll:
  if (this.currentFrameObject.rollIndex == 0) {
    //update the frame with firstRoll score
    this.currentFrameObject.firstRoll(pinsKnocked);

  } else { // its on its second roll
    this.currentFrameObject.secondRoll(pinsKnocked); // updates frame with the results of the second roll
    this.scoreSheet.push(this.currentFrameObject); // frame finished add the frame to scoreSheet:
    this.gameOver();
    this.currentFrameObject = null; // DOES this go in here or at end of second roll?
  }

};

Game.prototype.rollBall = function(pinsKnocked) {
  this.logRoll(pinsKnocked);
};

Game.prototype.gameOver = function() {
  // this probably needs to go at end of frame 9
  if (this.frameIndex == 9 && this.currentFrameObject.strike == false) {
    this.isGameOver = true;
  }
};

// game.prototype.resetGame = function() {
//
// }

// next thing to do check if at end of game
// scoresheet in a separate class? - not essential and might not need to.
// keep it neat and modular

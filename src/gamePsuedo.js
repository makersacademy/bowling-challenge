function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.previousStrike = false;
  this.previousSpare = false;
  this.scoreSheet = []; //[Frame, Frame]
  this.totalScore = 0;
}

Game.prototype.logRoll = function(pinsKnocked) {

  //if this is a new frame
  if (this.currentFrameObject == null) { // apparently if statement on its own is cool

    //create the frame
    this.currentFrameObject = new Frame();
    this.frameIndex += 1; // THIS NEEDS to be below as well

  }

    //if its on its first roll:
    if (this.currentFrameObject.rollIndex == 0) {

        //update the frame
        this.currentFrameObject.firstRoll(pinsKnocked);

      } else { // its on its second roll
        this.currentFrameObject.secondRoll(pinsKnocked);

            // frame finished add the frame to scoreSheet:
            this.scoreSheet.push(this.currentFrameObject);
      }
}

Game.prototype.rollBall = function(pinsKnocked) {
  this.logRoll(pinsKnocked)
}



function Frame(){
  this.rollIndex = 0;
  this.FirstRollScore = 0;
  this.SecondRollScore = 0;
  this.strike = false;
  this.split = false;
}

Frame.prototype.firstRoll = function(pinsKnocked){
  this.FirstRollScore = pinsKnocked;
  this.strike = (pinsKnocked == 10 ? true : false); //etc (although is there anythng else?)
  this.rollIndex = 1;
}

Frame.prototype.secondRoll = function (pinsKnocked){
  this.FirstRollScore = pinsKnocked;
  this.split = ((this.FirstRollScore + this.SecondRollScore) == 10 ? true : false);
  this.currentFrameObject = null;
}

// next thing to do check if at end of game
// scoresheet in a separate class? - not essential and might not need to.
// keep it neat and modular

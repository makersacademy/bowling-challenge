function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index

  this.previousStrike = false;
  this.previousSpare = false;
  this.scoreSheet = []; //[Frame, Frame]
  this.totalScore = 0;
}

Game.prototype.logRoll = function(pinsKnocked) {
  //if its your first ever roll:
  if (this.frameIndex == -1) {

    //create the first frame
    this.frameIndex += 1;
    var firstFrame = new Frame();

    //log the score / update the frame :
    firstFrame.firstRoll(pinsKnocked);

    // add the frame to scoreSheet:
    this.scoreSheet.push(firstFrame);
  } else {

    //get the current frame:
    var currentFrameObject = this.scoreSheet[this.frameIndex]; //scoreSheet[1]

    //if its on its first roll:
    if (currentFrameObject.rollIndex == 1) {

        //update the frame
        currentFrameObject.firstRoll(pinsKnocked);

      } else {
        currentFrameObject.secondRoll(pinsKnocked);
      }


      // this needs to stay below currentFrameObject so it doesn't mess with index selection
      this.frameIndex += 1;
  }
}

Game.prototype.rollBall = function(pinsKnocked) {
  this.logRoll(pinsKnocked)
}

function Frame(){
  this.rollIndex = 1;
  this.FirstRollScore = 0;
  this.SecondRollScore = 0;
  this.strike = false;
  this.otherSpecials = false;
}

Frame.prototype.firstRoll = function(pinsKnocked){
  this.FirstRollScore = pinsKnocked;
  this.strike = (pinsKnocked == 10 ? true : false); //etc (although is there anythng else?)
}

Frame.prototype.secondRoll = function (pinsKnocked){
  this.rollIndex = 2;
  this.FirstRollScore = pinsKnocked;
  this.split = ((this.FirstRollScore + this.SecondRollScore) == 10 ? true : false);
}

//

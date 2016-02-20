'use strict';

function Scorecard(){
    this.bowlingFrames = []
    this.strike = false;
    this.spare = false;
    this.lastFrameStrike = false;
    this.lastFrameSpare = false;
    this.frameCount = 0
  }

  Scorecard.prototype.ballOne = function(noOfPins){
   //  cannot enter a score higher than 10
   // check if it's a strike, if it is turn Strike to true
  };

  Scorecard.prototype.ballTwo = function(noOfPins){
    //check if strike is true, if it is put 0 and calcutate score
   // cannot enter a score higher than 10-ballOne
   // check if it's a spare and if it is turn Spare to true
   // calcutateScore
  };

  Scorecard.prototype.checkStrike = function(){
// The player has a strike if he knocks down all 10 pins with the first roll in a frame.
// The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number
// of pins knocked down by the next two rolls.
// That would be the next frame, unless the player rolls another strike.
   };

   Scorecard.prototype.checkSpare = function(){
// The player has a spare if the knocks down all 10 pins with the two rolls of a frame.
// The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).
   };

   Scorecard.prototype.calculateScore = function(){
     //if lastFrameStrike and strike and spare both false score += ball1 + ball2, lastFrameStrike = false
     //if lastFrameSpare and strike and spare both false score += ball1, lastFrameSpare = false
     //if strike = true push 10, 0 to array else push ball 1 and ball 2 to array
     //if strike turn lastFrameStrike to true and strike to false
     //if spare trun lastFrameSpare to true and spare to false
     //check if end game
   };

   Scorecard.prototype.framecounting = function(){
     //count number of frames and add bonus frames if strike or spare on 10th frame
     //limit the number of frames to a max of 12
   };

   Scorecard.prototype.endGame = function(){
     //once the player runs out of frames it should push the last score to the card and publish the total
   };


   //note for array/hash: if hash key could be eg "frame1", then arry [noOfPins, noOfPins] then total score

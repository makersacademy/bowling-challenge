'use strict';

function Game(){
  // stores all the bowls
  this.frames = [];
};

Game.prototype.scoreCard = function(){
  return this.frames
}

Game.prototype.addFrame = function(pins) {
  //  pushes number of pins into array
  this.frames.push(pins);
}

Game.prototype.score = function() {
  var score = 0;
  //  index of shots array starting at 0
  var frameIndex = 0;

  // iterate through the frames array, loop through 10 frames
  for (var rollIndex = 0; rollIndex < 10; rollIndex++) {
     
    //  strike logic 
      if (this.frames[frameIndex] == 10) {
        score += this.frames[frameIndex] + this.frames[frameIndex + 1] + this.frames[frameIndex + 2];  
        frameIndex = frameIndex+1;
    // spare logic
    } else if (this.frames[frameIndex] + this.frames[frameIndex + 1] === 10) {
        score += this.frames[frameIndex] + this.frames[frameIndex + 1] + this.frames[frameIndex + 2];
        frameIndex += 2;
    // score logic
    } else {
        score += this.frames[frameIndex] + this.frames[frameIndex + 1];
        frameIndex += 2;
    }
  }
  return score;
};



scoreUpdater = function(ballPinsArray) {

  this.frames.forEach(function(frame) {
    if(frame.isSpare && ballPinsArray[frame.startingBallIndex + 2] != undefined) {
      frame.finalFrameScore = 10 + ballPinsArray[frame.startingBallIndex + 2]
    } else if(frame.isStrike
              && ballPinsArray[frame.startingBallIndex + 1] != undefined
              && ballPinsArray[frame.startingBallIndex + 2] != undefined)

              {frame.finalFrameScore = 10 + ballPinsArray[frame.startingBallIndex + 1]
                + ballPinsArray[frame.startingBallIndex + 2]
    }
  });
};

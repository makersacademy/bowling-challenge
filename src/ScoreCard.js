function ScoreCard(frames) {

  this.frames = [];

  this.openFrames = frames;

  this.getScore = function() {
    var result = 0;
    for (i=0;i<this.frames.length;i++) {
      result += this.frames[i].score;
    }
    return result;
  };

  this.roll = function(pinsHit) {

    var frame = this.openFrames[0];
    var nextFrame = this.openFrames[1];
    var thirdFrame = this.openFrames[2];

    if (nextFrame && frame.isSprike) {
      if (nextFrame.isSprike) {
        thirdFrame.addScore(pinsHit);
      }
      nextFrame.addScore(pinsHit);
    }

    frame.addScore(pinsHit);

    if (frame.isClosed) {
      this.frames.push(this.openFrames.shift());
      if (nextFrame && nextFrame.isClosed) {
        this.frames.push(this.openFrames.shift());
      }
    }

  };



};

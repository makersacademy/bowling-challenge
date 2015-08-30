var BowlingScore = function(){
  this.score = 0;
  this.currentFrame = [];
  this.framePinCount = 10;
  this.bowlingFrames = [];
  this.currentBall = 1;
  this.strikes = [];
};

BowlingScore.prototype.recordRoll = function(pinsHit) {
  this.checkValidRoll(pinsHit);
  this.framePinCount = this.framePinCount - pinsHit;
  this.currentFrame.push(pinsHit);
  //put check here at some point for 10th frame.
  //move the below method into it's own for normal frame and have one for 10th frame
  if (this.currentBall === 2 || pinsHit === 10) {
    this.bowlingFrames.push(this.currentFrame);
    this.resetFrame();
    this.calculateScore();
  };
  this.currentBall++;
  this.calculateStrikeScore();
};

BowlingScore.prototype.checkValidRoll = function(pinsHit) {
  if (pinsHit > this.framePinCount) {
    throw new Error("only 10 pins per frame");
  }
};

BowlingScore.prototype.currentFrameNumber = function() {
  return this.bowlingFrames.length;
};

BowlingScore.prototype.resetFrame = function() {
  this.currentFrame = [];
  this.currentBall = 0;
  this.framePinCount = 10;
};

BowlingScore.prototype.calculateScore = function() {
  var frameScore = this.bowlingFrames[this.bowlingFrames.length -1].reduce(function(a, b) {
    return a + b;
  });
 (frameScore < 10) ? this.score += frameScore : this.recordStrike() ;
};

BowlingScore.prototype.recordStrike = function() {
  this.strikes.push(this.bowlingFrames.length -1);
};

BowlingScore.prototype.calculateStrikeScore = function() {
  for (var i = 0; i < this.strikes.length; i++) {
      if (this.bowlingFrames[this.strikes[i] + 1] !== undefined && this.bowlingFrames[this.strikes[i] + 1].length === 2 ) {
        var frameScores = this.bowlingFrames[this.strikes[i]].concat(this.bowlingFrames[this.strikes[i] + 1]);
        var score = frameScores.reduce(function(a, b) {
          return a + b;
        });
        this.score += score;
        this.strikes.splice(i, 1);
    };
      if (this.bowlingFrames[this.strikes[i] + 1] !== undefined && this.bowlingFrames[this.strikes[i] + 2] !== undefined) {
        var frameScores = this.bowlingFrames[this.strikes[i] + 1].concat(this.bowlingFrames[this.strikes[i] + 2][0]);
        var score = frameScores.reduce(function(a, b) {
          return a + b;
        });
        this.score += (score + 10);
        this.strikes.splice(i, 1);
     };

  };
};

//to implement
//when 2 balls rolled we move onto next
//maybe have a running score array that is checked every roll and calced if required
//flatten an array var flat_arr = [].concat.apply([],arr);
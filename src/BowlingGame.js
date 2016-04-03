function BowlingGame(){
  this.currentScore = 0;
  this._currentFrame = 1;
  this._frames = [];
}

BowlingGame.prototype.getCurrentFrame = function() {
  return this._frames.last();
};

BowlingGame.prototype.getPreviousFrame = function() {
  var frame = this._frames;
  return frame[frame.length-2];
};

BowlingGame.prototype.addFrame = function(frame) {
  this._frames.push(frame);
};

BowlingGame.prototype.startGame = function () {
  this.addFrame(new Frame());
};

BowlingGame.prototype.enterScore = function(score) {
  var frame = this.getCurrentFrame();
  frame.addScore(score);
  if(frame.isComplete()){
    frame.getOutcome();
    this.addFrame(new Frame());
  }
};

BowlingGame.prototype.calculateScore = function() {
  var score = 0;
  var frameIndex = 0;
  var self = this;

  function wasAStrike(index) {
    return self._frames[index].outcome === "X";
  }

  function wasASpare(index) {
    return self._frames[index].outcome === "/";
  }

  function strikeBonus() {
    if(wasAStrike(frameIndex + 1)){
      return wasAStrike(frameIndex + 2) ? 20 : 10 + self._frames[frameIndex + 2].firstBall;
    }
    else {
      return self._frames[frameIndex + 1].ballTotal;
    }
  }

  function spareBonus() {
    return wasAStrike(frameIndex + 1) ? 10 : self._frames[frameIndex + 1].firstBall;
  }

  for(var frame = 0; frame < 10; frame++){
    if(wasAStrike(frame)){
      score += 10 + strikeBonus();
      frameIndex += 1;
    }
    else if(wasASpare(frame)){
      score += 10 + spareBonus();
      frameIndex += 1;
    }
    else {
      score += self._frames[frame].ballTotal;
      frameIndex += 2;
    }
  }
  return score;
};

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}

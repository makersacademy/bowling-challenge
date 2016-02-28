function Game(){
  this._frames = []
  this.currentFrameIndex = -1;
}

Game.prototype.addFrame = function(frame){
  if (this.isOver() === true){
    return "Game Over";
  } else {
    this._frames.push(frame);
    this.currentFrameIndex++;
  }
};

Game.prototype.roll = function(pins){
  var frame = this.currentFrame()
  if (this._frames.length === 0) {
    this.addFrame(new Frame());
    frame = this.currentFrame()
  } else if (frame.isComplete()) {
    var frameToAdd = this._frames.length === 9 ? new FinalFrame() : new Frame();
    this.addFrame(frameToAdd);
    frame = this.currentFrame()
  }
  frame.roll(pins)
};

Game.prototype.currentFrame = function(){
  return (this._frames[this.currentFrameIndex]);
}

Game.prototype.isOver = function(){
   return ((this._frames).length > 9);
};

Game.prototype.score = function(){
  var totalScore = 0;
  var frames = this._frames;
  var spareBonus = false
  var strikeBonus = false
  var strikeRollover = false

  function addSpareBonus(frame){
    if (spareBonus) {
      totalScore += frame._rollOne;
      spareBonus = false;
    }
  }

  function addStrikeRollover(frame){
    if (strikeRollover) {
      totalScore += frame._rollOne;
      strikeRollover = false;
    }
  }

  function addStrikeBonus(frame){
    if (strikeBonus) {
      totalScore += (frame._rollOne + frame._rollTwo)
      strikeRollover = frame.isStrike() ? true : false;
      strikeBonus = false
    }
  }

  function checkSpare(frame){
    if (frame.isSpare()){
      spareBonus = true;
    }
  }

  function checkStrike(frame){
    if (frame.isStrike()){
      strikeBonus = true;
    }
  }

  frames.forEach(function(frame){
    addSpareBonus(frame)
    addStrikeRollover(frame)
    addStrikeBonus(frame)
    totalScore += frame.score();
    checkSpare(frame)
    checkStrike(frame)
  });
  return (totalScore)
};

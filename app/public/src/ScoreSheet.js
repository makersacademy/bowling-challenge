function ScoreSheet() {
  this._count = 0
  this._MAX_FRAMES = 11
  this._MAX_SCORABLE_FRAMES = 10
  this._frames = []
};

ScoreSheet.prototype.getCount = function() {
  return this._count;
};

ScoreSheet.prototype.incrementCount = function() {
  this._count ++;
};

ScoreSheet.prototype.getMaxFrames = function() {
  return this._MAX_FRAMES;
};

ScoreSheet.prototype.getMaxScorableFrames = function() {
  return this._MAX_SCORABLE_FRAMES;
};

ScoreSheet.prototype.getFrames = function() {
  return this._frames;
};

ScoreSheet.prototype.getFrame = function(index) {
  return this._frames[index];
};

ScoreSheet.prototype.updateFrames = function(frame) {
  this._frames.push(frame)
};

ScoreSheet.prototype.addFrame = function(frame) {
  this.checkValidations(frame);
  this.updateFrames(frame)
  this.incrementCount();
};

ScoreSheet.prototype.calculateBonus = function() {
  var bonus = 0;
  for(var i=0; i < this.countScorableFrames() ; i++) {
    if(this.getFrame(i).checkSpare() && this.getFrame(i+1) != undefined) {
      bonus += (this.getFrame(i+1).getRollKnockedPins(0))
    } else if(this.getFrame(i).checkStrike() && this.getFrame(i+1) != undefined && !this.getFrame(i+1).checkStrike()) {
      bonus += (this.getFrame(i+1).getRollKnockedPins(0) + this.getFrame(i+1).getRollKnockedPins(1))
    } else if(this.getFrame(i).checkStrike() && this.getFrame(i+1) != undefined && this.getFrame(i+2) != undefined && this.getFrame(i+1).checkStrike()) {
      bonus += (this.getFrame(i+1).getRollKnockedPins(0) + this.getFrame(i+2).getRollKnockedPins(0))
    }
  }
  return bonus;
};

ScoreSheet.prototype.calculateBaseScore = function() {
  var baseScore = 0;
  for(var i = 0; i < this.countScorableFrames(); i++) {
    baseScore += this.getFrame(i).scoreFrame();
  }
  return baseScore;
}

ScoreSheet.prototype.calculateScore = function() {
  return this.calculateBaseScore() + this.calculateBonus()
}

ScoreSheet.prototype.countScorableFrames = function() {
  return Math.min(this.getMaxScorableFrames(), this.getCount())
}

ScoreSheet.prototype.checkValidations = function(frame) {
  if (this.getCount() > this.getMaxFrames()) {
    throw("This scoresheet already has " + (parseInt(this._MAX_FRAMES) + 1) + " frames.");
  }
  if ((frame.getRollKnockedPins(0) + (frame.getRollKnockedPins(1)) > 10)) {
    throw("You cannot knock more than 10 pins per frame");
  }
};

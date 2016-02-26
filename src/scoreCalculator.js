function ScoreCalculator(){
  this.incrementalOverview = []
  this.ALL_PINS_DOWN = 10;
  this.nineFrameRollsComplete = 18;
  this.nineFramesComplete = 9;
}

ScoreCalculator.prototype.isSpare = function(thisFrame){
  return (thisFrame[0] + thisFrame[1] === this.ALL_PINS_DOWN && thisFrame[0] !== this.ALL_PINS_DOWN);
}

ScoreCalculator.prototype.isStrike = function(nextFrame){
  return (nextFrame[0] === this.ALL_PINS_DOWN);
}

ScoreCalculator.prototype.spareBonus = function(nextFrame){
  return nextFrame[0];
}

ScoreCalculator.prototype.strikeBonus = function(nextFrames){
  if(nextFrames[0] === this.ALL_PINS_DOWN){
    return nextFrames[0] + nextFrames[2];
  } else {
    return nextFrames[0] + nextFrames[1];
  }
}

ScoreCalculator.prototype.calculateBonus = function(rolls){
  if(this.isStrike(this._frameValues(rolls))){
    return this.strikeBonus(this._nextFramesValues(rolls));
  } else if (this.isSpare(this._frameValues(rolls))){
    return this.spareBonus(this._nextFramesValues(rolls));
  } else{
    return 0;
  }
}

ScoreCalculator.prototype._incrementalScore = function(fullRoll){
  var incrementalValue = 0;
  this.incrementalOverview = [];
  for(var i = 0; i<(fullRoll.length); i += 2){
    var bonus = this.calculateBonus(fullRoll.slice(i,fullRoll.length));
    incrementalValue += bonus + fullRoll[i] + fullRoll[i+1];
    this.incrementalOverview.push(incrementalValue);
  };
  return this.incrementalOverview;
}

ScoreCalculator.prototype.tenFrameCalc = function(tenthFrame){
  if(this.isStrike(tenthFrame)){
    return this.ALL_PINS_DOWN + tenthFrame[1]+tenthFrame[2];
  } else{
    return this.calculateBonus(tenthFrame)+tenthFrame[0]+tenthFrame[1];
  }
}

ScoreCalculator.prototype.finalCalc = function(fullRoll){
  if (fullRoll.length<this.nineFrameRollsComplete){
    return this._incrementalScore(fullRoll);
  }
  var frameResults = this._incrementalScore(fullRoll).slice(0,this.nineFramesComplete);
  var tenFrameValue = frameResults[frameResults.length-1] + this.tenFrameCalc(this._tenthFrameRoll(fullRoll));
  frameResults.push(tenFrameValue);
  return frameResults;
}


ScoreCalculator.prototype._frameValues = function(rolls){
  return rolls.slice(0,2);
}

ScoreCalculator.prototype._nextFramesValues = function(rolls){
  return rolls.slice(2,rolls.length);
}

ScoreCalculator.prototype._tenthFrameRoll = function(fullRoll){
  return fullRoll.slice(this.nineFrameRollsComplete,fullRoll.length)
}

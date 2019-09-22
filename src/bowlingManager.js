function BowlingManager(){
}

BowlingManager.prototype.matchScore = function(frames){
  var matchScore = 0;
  for (var i = 0; i < frames.length; i++){
    matchScore += frames[i].frameScore();
    if(frames[i].isSpare()){matchScore += this.spareCalc(frames[i+1])}
    if(frames[i].isStrike()){matchScore += this.strikeCalc(frames[i+1],frames[i+2])}
  }
  return matchScore;
}

BowlingManager.prototype.anotherThrow = function(frameScore, frame){
  if(frame===10){return this.tenthFrameAnotherThrow(frameScore)}
  if(frameScore.rollTwo != null){return false;}
  if(frameScore.rollTwo == null && frameScore.rollOne < 10){return true;}
  return false;
  }

BowlingManager.prototype.tenthFrameAnotherThrow = function(frameScore){
  if(frameScore.rollTwo == null){return true}
  if(frameScore.rollThree == null && frameScore.rollOne+frameScore.rollTwo>=10){return true}
  return false;
}

BowlingManager.prototype.spareCalc = function(frame){
  if(typeof frame !== 'undefined'){return frame.rollOne}
  return 0;
}

BowlingManager.prototype.strikeCalc = function(frame2,frame3){
  if(typeof frame2 !== 'undefined'){
    if(frame2.isStrike()){
      if(typeof frame3 !== 'undefined'){
        return frame3.rollOne + 10
      }else{
        return 10
      }
    }else{
      return frame2.rollOne+frame2.rollTwo;
    }
  }
  return 0;
};
function BowlingManager(){

};

BowlingManager.prototype.matchScore = function(frameScore){
  return frameScore.rollOne+frameScore.rollTwo+frameScore.rollThree;
}

BowlingManager.prototype.anotherThrow = function(frameScore, frame){
  if(frame===10){return this.tenthFrameAnotherThrow(frameScore)};
  if(frameScore.rollTwo != null){return false;};
  if(frameScore.rollTwo == null && frameScore.rollOne < 10){return true;}
  return false;
  };

BowlingManager.prototype.tenthFrameAnotherThrow = function(frameScore){
  if(frameScore.rollTwo == null){return true};
  if(frameScore.rollThree == null && frameScore.rollOne+frameScore.rollTwo>=10){return true};
  return false;
};
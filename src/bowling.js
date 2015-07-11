var BowlingScoreCard = function() {
  this.roll = [null,null];
  this.allFrames = Array.apply(null, new Array(10)).map(function(){return this.roll});
  this.totalScore = 0;
};

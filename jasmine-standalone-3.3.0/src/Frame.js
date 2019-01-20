function Frame () {
}

var Frame = function(rolls) {
  this.rolls = rolls
  this.maxpins = 10
}


Frame.prototype.oneframeScore = function() {
  return this.rolls.reduce(function(score1, score2) {
    return score1 + score2;
  })
}

Frame.prototype.bonusScore = function(){
  return 0;
}
// assumes bonus score is zero
Frame.prototype.totalscore = function(frame1, frame2) {
  return this.bonusScore(frame1,frame2) + this.oneframeScore();
}

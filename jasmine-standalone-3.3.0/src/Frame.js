function Frame () {
}

var Frame = function(roll) {
  this.roll = roll
}


Frame.prototype.oneframeScore = function() {
  return this.roll.reduce(function(score1, score2) {
    return score1 + score2;
  })
}

Frame.prototype.bonusScore = function(frame2,frame3){
  if (this.spare()) {
    return frame2.bonusforSpare();
  } else {
    return 0
  }
}

// assumes bonus score is zero
Frame.prototype.totalscore = function(frame2, frame3) {
  return this.bonusScore(frame2,frame3) + this.oneframeScore();
}


Frame.prototype.spare = function() {
  return this.oneframeScore() == 10
}


Frame.prototype.bonusforSpare = function() {
  return this.roll[0]
}

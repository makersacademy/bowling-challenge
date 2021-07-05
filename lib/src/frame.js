function Frame(){
  this.isStrike = false
  this.score = []
}

Frame.prototype.firstBowl = function(score){
  if (score === 10){
    this.isStrike = true
    return score
  } else {
    return score
  };
  this.score.push(score)
};

Frame.prototype.secondBowl = function(score){
  this.isStrike = false
  this.score.push(score)
  return score
};

Frame.prototype.frameScore = function(){
  return this.score
}

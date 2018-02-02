function Frame(){
  this.isStrike = false
}

Frame.prototype.firstBowl = function(score){
  if (score === 10){
    this.isStrike = true
    return score
  } else {
    return score
  };
};

Frame.prototype.secondBowl = function(score){
  this.isStrike = false
  return score
};


module.exports = frame

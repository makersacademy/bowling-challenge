function Frame(){
  this.frameScore = [];
}

Frame.prototype.firstBowl = function () {
  var result = Math.round(Math.random() * (0 - 10) + 10);
  this.frameScore.push(result);
  return result;
};

Frame.prototype.secondBowl = function() {
  var knocked = 10 - this.currentScore();
  var result = Math.round(Math.random() * (0 - knocked) + knocked);
  this.frameScore.push(result);
  return result;
};


Frame.prototype.currentScore = function(){
  return this.frameScore[this.frameScore.length-1];
};

Frame.prototype.isAStrike = function() {
  return this.firstBowl() === 10;
};

Frame.prototype.totalFrameScore = function(){
  return this.frameScore[0] + this.frameScore[1];

};

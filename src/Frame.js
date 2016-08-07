function Frame(){
  this.frameScore = [];
  this.previousScore = 0;
  this.roll = 0;
}

Frame.prototype.firstBowl = function () {
  var result = Math.round(Math.random() * (0 - 10) + 10)
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

Frame.prototype.totalFrameScore = function(){
  var sum = this.frameScore.reduceRight(function(a,b){
    return a + b;
  })
  return sum;
};

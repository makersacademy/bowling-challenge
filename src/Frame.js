function Frame(){

  this.frameScore = [];

}

Frame.prototype.firstBowl = function () {
 this.frameScore.push(Math.round(Math.random() * (0 - 10) + 10));
};

Frame.prototype.firstBall = function(){
  return this.frameScore[0];
};

Frame.prototype.secondBowl = function() {
  knocked = 10 - this.firstBall();
  this.frameScore.push(Math.round(Math.random() * (0 - knocked) + knocked));
};

// module.exports = Frame;

var ScoreCard = function(){
  this.sumTotal = 0;
  this.indRoll = 0;
  this.frameTotal = 0;
};

ScoreCard.prototype.regRolls = function(num){
  this.frameTotal += num;
}

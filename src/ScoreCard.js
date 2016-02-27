function ScoreCard() {
  this.score = 0; 
  this.results = [];
  this.spareBonus = false;
};


ScoreCard.prototype.getScore = function(){
  return this.score;

};

ScoreCard.prototype.addScore = function(score){
  if (this.spareBonus) { 
    this.spareBonus = false;
    this.score += score
  };
  this.score += score;  
  this.results.push(score);
};

ScoreCard.prototype.isSpare = function(){
  return (this.results[this.results.length -1] + this.results[this.results.length -2] == 10);
};

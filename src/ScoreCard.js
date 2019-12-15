ScoreCard = function(){
  this.frame = 1;
  this.throw = 1;
  this.score = 0;
  this.pins = 0;
};
ScoreCard.prototype.frameTrack = function(){
  if(this.throw === 2 || this.pins === 10){
    this.frameReset();
  };
  this.throw += 1;
};
ScoreCard.prototype.frameReset = function(){
  this.frame += 1;
  this.throw = 0;
  this.score += this.pins;
  this.pins = 0;
};
ScoreCard.prototype.bowl = function(hit){
  this.pins += hit;
  this.frameTrack();
};

ScoreCard = function(){
  this.frame = 1;
  this.throw = 1;
  this.score = 0;
  this.pins = 0;
  this.spare = false;
  this.strike = false;
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
  if(this.pins === 10) this.spare = true;
  this.pins = 0;
};
ScoreCard.prototype.bowl = function(hit){
  if(this.spare === true){
    hit *= 2;
    this.spare = false
  };
  this.pins += hit;
  this.frameTrack();
};

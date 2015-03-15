var Bowling = function () {
  this.pins = 10;
  this.score = 0;
  this.strikes = 0;
  this.spares = 0;
  this.frame = 0;
}

Bowling.prototype.roll1 = function(score) {
  this.pins = 10;
  if(score === 10){
    this.strikes = this.strikes + 1;
    this.score = this.score + 30;
    this.frame = this.frame + 1;
  }
  else{
  this.pins = this.pins - score
  this.score = this.score + score
  }
   if(this.frame > 10){
      throw Error("There are only ten frames");
    }
};

Bowling.prototype.roll2 = function(score) {
  this.score = this.score + score;
  this.pins = this.pins - score
  this.frame = this.frame + 1
  if(this.pins === 0){
    this.spares = this.spares + 1;
  }

};
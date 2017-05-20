function Frame(){
  this.roll = 0;
  this.MAX_ROLLS=2;
  this.MAX_POINTS=10;
  this.points = 0;
}

Frame.prototype.play = function(){
if(this.roll == this.MAX_ROLLS){
  return this.roll;
}
return this.roll += 1;
};

Frame.prototype.addPoints = function () {

};

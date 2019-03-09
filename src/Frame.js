function Frame(){
  this.score = [];
  this.pins = []; //start with 10 pins for each frame
  this.FRAMESIZE = 2;

for (i=0; i < 10; i++){
  this.pins.push(i)
  }//each frame starts with 10 pins

//
//
//
Frame.prototype.bowl = function(pins_hit){

  if (this.score.length < this.FRAMESIZE){
    this.score.push(pins_hit)}
};
//
Array.prototype.sum = function(){
  for (var i =0, L = this.length, sum = 0; i < L; sum +=this[i++]);
  return sum;
};
};

function Frame(pins_standing){
  this.score = [];
  this.pins = []; //start with 10 pins for each frame
  this.FRAMESIZE = 2;

for (i=0; i < 10; i++){
  this.pins.push(pins_standing)
}//each frame starts with 10 pins. Put 10 pins into 10 arrays 10 times

//
//
//
Frame.prototype.bowl = function(pins_hit){

  if (this.score.length < this.FRAMESIZE){
    this.pins.splice(0,pins_hit);
    this.score.push(pins_hit);
  }
  else
  return('frame completed')
};
//
Array.prototype.sum = function(){
  for (var i =0, L = this.length, sum = 0; i < L; sum +=this[i++]);
  return sum;
};
};

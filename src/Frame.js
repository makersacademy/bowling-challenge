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
  this.bowlValidation(pins_hit);
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

Frame.prototype.bowlValidation = function(pins){
  if (pins > 10) {throw new Error('You cannot knock more than 10 pins down!'); }
  if (pins < 0) {throw new Error('Negative Number!'); }
};

Frame.prototype.bowlStrike = function() {
  this.score.push(10);
  this.pins.splice(0,10);
  this.score.length == this.FRAMESIZE;
  return ('Strike!');
};

Frame.prototype.isStrike = function(){
  return (this.score[0] === 10)
};

Frame.prototype.sparePins = function(pins_hit){
  pins = 10 - pins_hit;
  return pins
};

Frame.prototype.isSpare = function(){
  return (this.score.sum() === 10 && this.score[0]!=10)
};

Frame.prototype.bonusBowl = function(pins_hit){
  if(this.score.length === 2 && (this.isSpare() || this.isStrike())){
    this.score.push(pins_hit);
  } else {
    return ('Game Over');
  };

};

};

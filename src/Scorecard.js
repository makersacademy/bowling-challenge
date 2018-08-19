function Scorecard() {
  this.frame = [];
  this.allFrames = [];
  this.score = 0
};

Scorecard.prototype.roll = function(roll) {
  if(roll > 10){
    throw new Error("There is a maximum of 10 pins per frame");
  }
  else{
    this.frame.push(roll);
    this.score += roll;
    if(roll === 10){
      this.allFrames.push(this.frame);
      this.frame = [];
    }
    else if(this.frame.length === 2){
      this.allFrames.push(this.frame);
      this.frame = [];
    }
  };
};

Scorecard.prototype.endFrame = function(){

};

// Scorecard.prototype.framePins = function(){
//   var total=0;
//   for(var i in this.frame) { total += this.frame[i]; }
//   return total;
// };

function Bowling() {
 this.TotalScore = [];
 this.MaxFrames = 10;
 this.FrameCount = 1;
 this.CurrentFrame = [];
 this.WaitingForBonus = [];
};

var SPAREBONUS = 1;
var STRIKEBONUS = 2;

Bowling.prototype.roll = function(pins) {
  if(pins === 10){this.strike()
  }; 
  if(this.CurrentFrame[0] + pins === 10){
    this.spare(this.CurrentFrame.push(pins))
  }else if(this.CurrentFrame.length < 2){
    this.CurrentFrame.push(pins)
    this.rollAgain()
  }else if(this.CurrentFrame.length === 2){
    this.newFrame(pins)
  };
};



Bowling.prototype.strike = function() {
  console.log("Strike!")
};


Bowling.prototype.newFrame = function(pins) {
  this.save(this.CurrentFrame)
  this.CurrentFrame.push(pins)
};

Bowling.prototype.spare = function(frame) {
  this.WaitingForBonus.push(frame)
  this.CurrentFrame = []
  this.getBonus(SPAREBONUS, setBonus(), this.WaitingForBonus)
};

Bowling.prototype.save = function(frame){
  this.TotalScore.push(frame)
  this.CurrentFrame = []
  console.log("Your Score is... Play again")
};

Bowling.prototype.rollAgain = function() {
  console.log("Your Score is... Play again")
};

Bowling.prototype.getBonus = function(bonustype, callback, callbackObj) {
  
};




// Bowling.prototype.roll = function(pins) {
  
//   if(this.CurrentFrame.length === 2 && this.CurrentFrame[0] + this.CurrentFrame[1] != 10){
//     this.TotalScore.push(this.CurrentFrame)
//     this.CurrentFrame = []
//     this.CurrentFrame.push(pins)
//   }else{
//   this.CurrentFrame.push(pins);
//   };
// };
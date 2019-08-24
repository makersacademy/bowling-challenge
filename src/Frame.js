'use strict'


function Frame() {


var insertFrame = require('./scorecard');

this.pinsDown = [];
this.allPinsDown = [];
this.runningTotal = 0;

}



Frame.prototype.pinsDown = function() {
  return this.pinsDown
}

Frame.prototype.allPinsDown = function() {
  return this.pinsDown
}

Frame.prototype.insertRoll1 = function(value) {
  this.pinsDown = []
  this.pinsDown[0]= value
  // if(value === 10){ this.pinsDown[1] = " "
  // this.finish(this.pinsDown)


}


Frame.prototype.insertRoll2 = function(value) {
  this.pinsDown[1]= value;
  this.allPinsDown.push(this.pinsDown);
  if (this.pinsDown[0] + this.pinsDown[1] <10)
  {this.runningTotal =+ (this.pinsDown[0] + this.pinsDown[1])
  this.finish([0,0])}

}

Frame.prototype.totalPinsDown = function(){
  return this.pinsDown.reduce((a,b) => a + b);
}

Frame.prototype.totalScore = function(){

  if(this.pinsDown.reduce((a,b) => a + b) === 10)
  {return " "}
  else
  return this.pinsDown.reduce((a,b) => a + b);
}

Frame.prototype.finish = function(scorecard){
  scorecard.insertFrame();
};

// Frame.prototype.updateRunningTotal = function(frameScore){
//   this.runningTotal = this.runningTotal + frameScore;
// }



// Frame.prototype.publish = function(scorecard){
//   var rolls = this.pinsDown
//   scorecard.accept(this);
  // this.pinsDown = []//delete scorecard
// };
// Frame.prototype.finish = function(){
//   <<this.pinsDown
// }


// Frame.prototype.score = function(){
//  return this.pinsDown.reduce((a,b) => a + b);
// }
// Frame.prototype.score = function(value){
//  return this.pinsDown.array.reduce((a,b) => a+b)
// }


// function Song() {
// }
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };

// module.exports = Frame;

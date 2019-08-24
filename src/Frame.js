'use strict'



function Frame() {

this.allPinsDown = [];
// var insertFrame = require('./scorecard');

this.pinsDown = [];
this.scores = [];
this.bonus = [1,1];

// this.runningTotal = 0;

}



Frame.prototype.pinsDown = function() {
  return this.pinsDown
}

Frame.prototype.allPinsDown = function() {
  return this.allPinsDown
}

Frame.prototype.insertRoll1 = function(value) {

  this.pinsDown[0]= value;



  if(value === 10){ this.pinsDown[1] = " "
this.updateAllPinsDown(this.pinsDown[0], this.pinsDown[1]);
this.scores.push((this.pinsDown[0] * this.bonus[0]))
this.bonus = [2,2]


  }


}


Frame.prototype.insertRoll2 = function(value) {

    this.pinsDown[1]= value;




  this.updateAllPinsDown(this.pinsDown[0], this.pinsDown[1]);


     this.scores.push((this.pinsDown[0] * this.bonus[0]), (this.pinsDown[1] * this.bonus[1]))

     if(this.pinsDown[0] + this.pinsDown[1] < 10){
       this.bonus = [1,1]}
       else { this.bonus = [1,2]
       }
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

Frame.prototype.updateAllPinsDown = function(roll1, roll2){
  this.allPinsDown.push([roll1, roll2]);
}

Frame.prototype.runningTotal = function(){
  return this.scores.reduce((a,b) => a + b);
}


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

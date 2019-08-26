'use strict'



function Frame() {

this.allPinsDown = [];
this.displayAllPinsDown = [];
this.pinsDown = [];
this.scores = [];
this.bonus = [1,1,1];
this.streak = [];
this.previousScore = 0;
this.previousPinsDown = [0,0];

// this.runningTotal = 0;

}



Frame.prototype.pinsDown = function() {
  return this.pinsDown
}

Frame.prototype.allPinsDown = function() {
  return this.allPinsDown
}

Frame.prototype.insertRoll1 = function(value){
this.pinsDown[0]= value;

if(value === 10) {
  this.allPinsDown.push([10,0])
  this.displayAllPinsDown.push(["X"," "])
}

}



Frame.prototype.insertRoll2 = function(value){
this.pinsDown[1]= value;
this.allPinsDown.push([this.pinsDown[0], this.pinsDown[1]]);

// if(this.allPinsDown.length !== 0) {
//   this.previousPinsDown = this.allPinsDown[this.allPinsDown.length-1]
// }
// else
// {this.previousPinsDown = [0,0]};

  this.previousPinsDown = this.allPinsDown[(this.allPinsDown.length-1)]


if(this.scores[this.scores.length-1] === undefined)
{this.previousScore = 0}
else
{this.previousScore = this.scores[this.scores.length-1]}

  // this.scoreSoFar = this.scores.reduce((a,b) => a + b);



//BRING THIS STUFF BACK LATER
// if (this.previousPinsDown === [10,0])
// // {this.scores[(this.allPinsDown.length)/2] += (this.pinsDown[0] + this.pinsDown[1] )}
// {this.scores.push(10 + this.pinsDown[0] + this.pinsDown[1] + this.scoreSoFar)}
// else if (this.previousPinsDown[1] === '/')
// {this.scores[(this.allPinsDown.length)/2] += (this.pinsDown[0])}
//   else
//   // {this.scores.push(1+ [this.previousScore ]);}
    //{this.scores.push([this.pinsDown[0] + this.pinsDown[1] ]);}

  // {this.scores.push(([this.pinsDown[0] + this.pinsDown[1] + this.previousScore]).reduce((a,b) => a + b))}

  {this.scores.push(( this.pinsDown[0] + this.pinsDown[1] + this.previousScore ))}

}



// Frame.prototype.insertRoll1 = function(value) {
//
//   this.pinsDown[0]= value;
//
//
//
//   if(value === 10){ this.pinsDown[1] = " "
// this.updateAllPinsDown(this.pinsDown[0], this.pinsDown[1]);
//  this.streak.push([this.pinsDown[0]])
//
// // this.scores.push(this.streak)
// // this.streak = [];
//
//   }
//
//
// }
//
// Frame.prototype.insertRoll2 = function(value) {
//
//     this.pinsDown[1]= value;
//
// // this.streak.push([this.pinsDown[0],(this.pinsDown[1]] ))
//
//
//
//   this.updateAllPinsDown(this.pinsDown[0], this.pinsDown[1]);
//  // this.scores.push(((this.streak[0] * this.bonus[0]) + (this.streak[1] * this.bonus[1])) + ((this.allPinsDown.reduce((a,b) => a+b))));
//      // this.scores.push((this.pinsDown[0]), (this.pinsDown[1]))
//
//
//      if(this.pinsDown[0] + this.pinsDown[1] < 10){
//        // this.streak.push(this.pinsDown[0] + this.pinsDown[1]);
//        // this.
//        // var previousScore = this.scores.length
//        var x;
//        var streakScore =
//        for (x of this.streak) {
//        if(x.includes(10)){
//          x = x + this.streak[x+1] + this.streak[x+1]
//        }
//        else
//
//
//
//        }
//        this.scores.push(this.streak)
//        this.streak = [];
//        this.bonus = [2,2]
//
//         }
//         else if(this.pinsDown[0] + this.pinsDown[1] === 10){
//           this.bonus = [10,2,1]
//         }
//      }
//      this.streak = [];
//





Frame.prototype.totalPinsDown = function(){
  return this.pinsDown.reduce((a,b) => a + b);
}

// Frame.prototype.totalScore = function(){
//
//   if(this.pinsDown.reduce((a,b) => a + b) === 10)
//   {return " "}
//   else
//   return this.pinsDown.reduce((a,b) => a + b);
// }

Frame.prototype.updateAllPinsDown = function(roll1, roll2){
  this.allPinsDown.push([roll1, roll2]);
}

// Frame.prototype.runningTotal = function(){
//   return this.scores.reduce((a,b) => a + b);
// }


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

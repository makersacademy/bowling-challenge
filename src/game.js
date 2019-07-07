
function Game() {
  // this.scoreCapacity1to9=[];
  // this.scoreCapacity10=[];
  // this.firstRoll= 1;
  // this.secondRoll= 5;
  // this.score3= 3;


  this.rolls=1;
  this.frame=1;
  this.pins=[]; //points in each frame [5,5]
  this.totalScore=0;
  this.score1=0
  this.score2=1

  this.roll = function() {
    return this.rolls++
  };

  this.gutterGame = function() {
    if (this.pins===[] && this.roll()===20){
    };
    return this.totalScore= 0
  };

  this.perfectGame=function() {
    if (this.roll() === 12 && this.pins[120] ){
      return this.totalScore=300
    };
    return this.totalScore = 300
  };

  this.pointsInOneFrame = function() {
     this.pins.push(this.score1, this.score2)
     return this.pins
  };

  this.sumsUpFrameInFirstRound=function() {
    this.sum=this.pointsInOneFrame()[0]+ this.pointsInOneFrame()[1];
    return this.sum
  };







//
// ///
//
//   //returns an array of two first points
//     this.countScoresInRound1 = function() {
//
//       this.scoreCapacity1to9.push(this.pinsRound1, this.pinsRound2)
//       return this.scoreCapacity1to9
//
//     };
//
// //  console.log(this.countScoresInRound1());  ///--- function works outside the scope, which is good
//
//     this.sumScoresInRound1 = function() {
//       this.sum1=this.score1 + this.score2
//       return this.sum1
//     };
//
//     this.sumScoresInRound2 = function() {
//       this.sum2= this.score1 + this.score2;
//       return this.sum1+this.sum2
//     }
//
//     this.sumOfScores = function() {
//       // this.frame=this is my frame // f-1
//       // var f;
//       // for (f = 1; f > this.frame.length; f-- ){
//       //
//       // }
//       this.sumOfPoints= this.score1 + this.score2
//       if (this.sumOfPoints == 10){
//         var f
//         for (f=1; f=2, f++){
//
//         }
//   then add score1 from the next frame and the sum from the previous frame
//       } else {
//   smth
// }
//
//     }
//
//
//     console.log(this.sumScoresInRound1());
//
//
//
//
//
//
//
//   //edge case
//     this.countCapacityInFirst9Frames = function() {
//
//       this.scoreCapacity1to9.push(this.score1, this.score2);
//       return this.scoreCapacity1to9
//     };
//   //edge case
//     this.countCapacityInFrame10 = function() {
//       this.scoreCapacity10.push(this.score1, this.score2, this.score3)
//       return this.scoreCapacity10
//     };
//
//
  };

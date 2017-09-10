var Game = function( score = 0, frameNo = 1, rollNo = 1, scoreTable = []) {

  this.score = score;
  this.allowedToRoll = true;
  this.scoreTable = new Array(10)
  this.rollNo = rollNo
  this.frame = []
  this.frameNo = frameNo

  this.roll = function() {
    var rollNo1 = Math.floor(Math.random() * 11);
    this.frame.push(rollNo1);
    return rollNo1;
  };

  // this.roll2 = function() {
  //   var rollNo = Math.floor(Math.random() * 11);
  //   this.frame.push(rollNo);
  // };


};


// var scoreTable = [];

// for(var i=0; i<10; i++) {
//   scoreTable[i] = Array.apply(null, Array(2)).map(Number.prototype.valueOf,0);
// };


// this.roll1 = function() {
//     var rollNo1 = Math.floor(Math.random() * 11);
//     return rollNo1;
//     frame[0] = rollNo1;
//   };


// this.roll = function() {
//     var rollNo = Math.floor(Math.random() * 11);
//     return rollNo;
//     frame[0] = rollNo;
//   };
var Game = function(frameNo = 1, rollNo = 1, firstRoll = 0, secondRoll = 0, runningScore = 0) {

  this.frameNo = frameNo;
  this.rollNo = rollNo;
  this.firstRoll = firstRoll;
  this.secondRoll = secondRoll;
  this.frameTable = [];
  this.scoreTable = [];
  this.runningScore = runningScore

  this.roll = function() {
    if (game.scoreTable.length == 10) {
      return "Game over! Thanks for playing!"
    } else if (this.rollNo === 1) {
      this.firstRoll = Math.floor(Math.random() * 11);
      this.frameTable.push(this.firstRoll);
      this.rollNo += 1;
      return this.firstRoll
    } else if (this.rollNo === 2 && this.firstRoll !== 10 && this.scoreTable.length !== 10) {
      this.secondRoll = Math.floor(Math.random() * (11 - this.firstRoll));
      this.reset()
      return this.secondRoll;
    } else if (this.rollNo === 2 && this.firstRoll === 10 && this.scoreTable.length !== 10) {
      this.secondRoll = 0
      this.reset()
      return "You got a strike, only 1 roll this frame"
    };
  };

  this.reset = function() {
    this.frameTable.push(this.secondRoll);
    this.scoreTable.push(this.frameTable);
    this.frameTable = [];
    this.rollNo = 1;
    this.frameNo += 1;
    // if (game.scoreTable.length === 10) { break; }
    // unless (this.scoreTable.length = 10) 
    //     return "Game over! Thanks for playing!"
  };

};




// var Game = function( score = 0, frameNo = 1, rollNo = 1, scoreTable = []) {

//   this.score = score;
//   this.allowedToRoll = true;
//   this.scoreTable = []
//   this.frame = []
//   this.frameNo = frameNo
//   var rollNo1 = Math.floor(Math.random() * 11);
//   var rollNo2 = Math.floor(Math.random() * (11 - rollNo1));

//   this.roll1 = function() {
//     // var rollNo1 = Math.floor(Math.random() * 11);
//     this.frame.push(rollNo1);
//     return rollNo1
    
//   };

//   this.roll2 = function(rollNo1) {
//     if (this.frame[0] === 10) {
//       throw Error ("You got a strike, only 1 roll this frame")
//     } else {
//       // var rollNo2 = Math.floor(Math.random() * (11 - rollNo1));
//       this.frame.push(rollNo2);
//       return rollNo2;
//     };
//   };
   

//   this.frameScore = function() {
//     this.scoreTable.push(rollNo1 + rollNo2)
//     return this.scoreTable.last
//   }

  

// };


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

// for scoreTable[0]..scoreTable[8]


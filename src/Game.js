function Game() {
  this.totScore = 0;
  this.maxFrames = 10;
  this.newFrame();
}

Game.prototype.newFrame = function () {
  this.frame = new Frame();
};

Game.prototype.framesCounter = function () {
  if(this.maxFrames-- > 0) {
    this.newFrame();
    console.log("New frame");
  }
  else {
    console.log("Well Played! This is your Final Score: " + this.totScore);
    throw new Error("Game Over");
  }
};

//   if(this.frame.rollsCounter == 0) {
//     this.framesCounter();
//   else {
//     this.frame;
//     console.log("Same frame");
//   }
// };

Game.prototype.pinsKnockedDown = function(number) {
  this.frame.countPins(number);
  this.totScore += number;
  console.log(this.totScore);
  if (frame.isStrike()) {
    this.framesCounter();
  }
};

// Game.prototype.isStrike = function() {
//   if (this.frame.totPins === 0) {
//     this.framesCounter();
//   }
// };

// Game.prototype.limit = function(fn) {
//   maxCalls = 10;
//   return function() {
//     if(maxCalls-- > 0) {
//       return fn.apply(this, arguments);
//     }
//     else {
//       var err = new Error('limit exceeded');
//       if(throwErrors) {
//         throw err;
//       }
//       return err;
//     }
//   };
// }

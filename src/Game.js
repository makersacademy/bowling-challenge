function Game() {
  this.totScore = 0;
  this.maxFrames = 10;
  this._newFrame();

}

Game.prototype._newFrame = function () {
  if(this.maxFrames-- > 0) {
    this.frame = new Frame();
  }
  else {
    console.log("Well Played! This is your Final Score: " + this.totScore);
    throw new Error("Game Over");
  }
};

Game.prototype.pinsKnockedDown = function(number) {
  this.frame.countPins(number);
  this.totScore += number;
  console.log(this.totScore);
  this.nextFrame();
};

Game.prototype.nextFrame = function() {
  if (this.frame.totPins === 0) {
    this._newFrame();
    console.log("New frame");
  }
};

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

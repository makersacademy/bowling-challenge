var scoreFrame = function(frame) {
  return frame.reduce(function(roll, currentVal) {
    return roll + currentVal;
  });
};

var isStrike = function(frame) {
  return (frame[0] === 10)
};

var isSpare = function(frame) {
  return ( (frame[0] + frame[1]) === 10 &&  frame[0] != 10 )
};

var Scoresheet = function() {
  this.board = [[0,0],[0,0],[0,0],[0,0],[0,0],
                [0,0],[0,0],[0,0],[0,0],[0,0,0]]
  this.tally = [];
  this.round = 0;
  this.total = 0;
};

Scoresheet.prototype.addFrame = function(frame) {
  this.board[this.round] = frame;
  this.round++;
};

Scoresheet.prototype.scoreFrames = function() {
  this.tally = this.board.map(function(frame) {
      return scoreFrame(frame)
    });
};

  // this.normalFrames.forEach instead of while loop
Scoresheet.prototype.strikeCalc = function() {
  var n = 0;
  while ( n < 8 ) {

    if (isStrike(this.board[n])) {
      if (isStrike(this.board[n + 1]))
        { this.tally[n] = 20 + this.board[n + 2][0] } // two strikes
      else
        { this.tally[n] = 10 + this.tally[n + 1] }; // strike
    };

    if (isSpare(this.board[n])) { this.tally[n] = 10 + this.board[n + 1][0] };

    n += 1;
  };

  //You could make a helper method for accessing frame rolls
  if (isStrike(this.board[8]))
    { this.tally[8] = 10 + this.board[9][0] + this.board[9][1] };
  if (isSpare(this.board[8]))
    { this.tally[8] = 10 + this.board[9][0] };
};

Scoresheet.prototype.sum = function() {
  this.total = this.tally.reduce(function(roll, currentVal) {
    return roll + currentVal
  });
};

Scoresheet.prototype.update = function () {
  this.scoreFrames();
  this.strikeCalc();
  this.sum();
};

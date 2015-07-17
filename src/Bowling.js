var scoreFrame = function(frame) {
  if (frame.length === 3) { return (frame[0] + frame[1] + frame[2]) };
  if (frame.length === 2) { return (frame[0] + frame[1]) };
};

var Scoresheet = function() {
  this.board = [];
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

Scoresheet.prototype.strikeCalc = function() {
  n = 0;
  while ( n < 10 ) {
    if (this.tally[n] === 10) {
      if (this.board[n][0] === 10)
        { this.tally[n] = this.tally[n] + this.tally[n + 1] }
      else
        { this.tally[n] = this.tally[n] + this.board[n + 1][0] }
    };
  n += 1;
  };
};

Scoresheet.prototype.sum = function() {
  localSum = 0;
  this.tally.forEach(function(points){
    localSum += points;
  });
  this.total = localSum;
};

var scoreFrame = function(frame) {
  if (frame.length === 3) { return (frame[0] + frame[1] + frame[2]) };
  if (frame.length === 2) { return (frame[0] + frame[1]) };
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

Scoresheet.prototype.strikeCalc = function() {
  n = 0;
  while ( n < 8 ) {
    if (this.tally[n] === 10) {

      if (this.board[n][0] === 10) {
        if (this.board[n + 1][0] === 10)
          { this.tally[n] = 20 + this.board[n + 2][0] }
        else
          { this.tally[n] = 10 + this.tally[n + 1] };
      }
      else { this.tally[n] = 10 + this.board[n+1][0] };

    };
    n += 1;
  };

  if (this.board[8][0] === 10)
    { this.tally[8] = this.tally[8] + this.board[9][0] + this.board[9][1] };
  if (this.tally[8] === 10 && this.board[8][0] != 10)
    { this.tally[8] = this.tally[8] + this.board[9][0] };
};


Scoresheet.prototype.sum = function() {
  localSum = 0;
  this.tally.forEach(function(points){
    localSum += points;
  });
  this.total = localSum;
};

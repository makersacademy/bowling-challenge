var Scoresheet = function() {
  this.board = [];
  this.round = 0;
  this.tally = [];
  this.total = 0;
};

Scoresheet.prototype.score = function(frame) {
  this.board[this.round] = frame;
  this.round++;
};

Scoresheet.prototype.tally = function() {
  // track all the frame scores
};

Scoresheet.prototype.scoreFrames = function() {
  this.tally =
    this.board.map(function(frame){
      return (frame[0] + frame[1])
    });
  this.tally[9] += this.board[9][2];
};

Scoresheet.prototype.sum = function() {
  localSum = 0;
  this.tally.forEach(function(points){
    localSum += points;
  });
  this.total = localSum;
};

Scoresheet.prototype.scoreFrame = function(frame) {
  if (frame.length = 2) { return (frame[0] + frame[1]) };
  if (frame.length = 3) { return (frame[0] + frame[1]) + frame[2]};
};
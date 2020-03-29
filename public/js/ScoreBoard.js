function ScoreBoard() {

    this.playerName = "";
    this.frames = [];
    this.score = [];
    this.totalScore = 0;
    // this.newBoard();

  ScoreBoard.prototype.newBoard = function() {
    for (i=0; i<12; i++) {
      this.frames.push(new Frame);
      if (i > 0) { this.frames[i - 1].next_frame = this.frames[i]; }
    };
  };

  ScoreBoard.prototype.update = function() {
    runningTotal = 0;
    this.score = [];
    for (i=0; i<=10; i++) {
      runningTotal += this.frames[i].score();
      this.score.push(runningTotal);
    }
  };

};

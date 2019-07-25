function Scorecard() {
  this.score = 0;
  this.frame = 1;
  this.submit = function (x,y) {
    this.scoreMethod(x,y)
    this.endFrame(x,y)
  }
  
  this.scoreMethod = normalScore;
  this.endFrame = function (x,y) {
    if (x===10) {
      this.scoreMethod = afterStrikeScore
    } else if (x+y === 10) {
      this.scoreMethod = afterSpareScore
    } else {
      this.scoreMethod = normalScore
    }
    this.frame++;
  }


  function normalScore (x,y) {
    total = x + y;
    this.score += total;
  };

  function afterStrikeScore (x,y) {
    total = 2*x + 2*y;
    this.score += total;
  };

  function afterSpareScore (x,y) {
    total = 2*x + y;
    this.score += total;
  };

}

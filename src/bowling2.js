
function Ball() {
  this.downedPins = 0
  this.remainingPins = 10;
  this.special = "none";
  this.go = 1;
  this.frame = 1;
  this.score = 0;
}

Ball.prototype.bowl = function(pins) {
  this.downedPins = pins;
  this.remainingPins -= pins;
  if (this.remainingPins < 0){throw "not enough pins"};
  if      ( this.go === 1 && this.remainingPins === 0 ) {this.special = "strike"; }
  // below may not be a strike, need to know about previous ball to work out if spare or strike
  else if ( this.go === 2 && this.downedPins   === 10 && this.frame === 10 ) {this.special = "strike"; }
  else if ( this.go === 2 && this.remainingPins === 0 && this.frame === 10 ) {this.special = "spare"; }
  else if ( this.go === 3 && this.remainingPins === 0 && this.frame === 10 ) {this.special = "strike"; }
  else if ( this.go === 2 && this.remainingPins === 0 ) {this.special = "spare"; }
  else if ( this.go === 2 ) { this.score = 10 - this.remainingPins; };
};

Ball.prototype.setup = function(lastBall) {
  if (lastBall.frame === 10 && lastBall.go === 1 ) {
    this.go = 2;
    this.frame = lastBall.frame;
    if (lastBall.remainingPins) {
      this.remainingPins = lastBall.remainingPins
    } else {
      this.remainingPins = 10
    };
  }
  else if (lastBall.frame === 10 && lastBall.go === 2 ) {
    if (lastBall.remainingPins === 0 ) {
      this.go = 3;
      this.frame = lastBall.frame;
    }
    else {
      throw "no more balls!"
    };
  }
  else if (lastBall.frame === 10 && lastBall.go === 3 ) {
    throw "The game has ended!"
  }
  else if (lastBall.go == 1  && lastBall.special != "strike") {
    this.remainingPins = lastBall.remainingPins;
    this.go = lastBall.go + 1;
    this.frame = lastBall.frame;
  }
  else {
    this.go = 1;
    this.frame = lastBall.frame + 1;
  }
};

// *******************************************

function Stream() {
  this.gos = [];
  this.totalScore = 0;
}

Stream.prototype.nextball = function(points) {
  var self = this;

  currentBall = this.gos.length -1
  var ball1 = new Ball();
  if (currentBall != -1 ) ball1.setup(this.gos[currentBall]);  //previous ball being passed in
  ball1.bowl(points);
  this.gos.push(ball1);
  currentBall +=1

  this._calcSpareBonus(currentBall,points);
  this._calcStrikeBonus(currentBall,points);

//work out the total score
  this.totalScore = 0;
  //can't i do this with a foreach loop?
  this.gos.forEach(function(ball) {
    self.totalScore += ball.score
  });

  // function _addScore(ball) {
  //   this.totalScore += ball.score;
  // }
  // for (var i = 0; i < this.gos.length; i++) {
  //   this.totalScore += this.gos[i].score;
  // };
};


Stream.prototype._calcSpareBonus = function(current,nextPoints) {
  // does not calculate correctly on last frame
  if (current > 0 ) {
    if (this.gos[current-1].special === "spare") {
      this.gos[current-1].score = 10 + nextPoints;
    };
  };
};

Stream.prototype._calcStrikeBonus = function(current,nextPoints) {
  // does not calculate correctly on last frame
  if (current > 1 ) {
    if (this.gos[current-2].special === "strike") {
      this.gos[current-2].score = 10 + this.gos[current-1].downedPins + nextPoints;
    };
  };
};

Stream.prototype.display = function(frame,go) {
  for (var i = 0; i < this.gos.length; i++) {
    if (this.gos[i].go === go && this.gos[i].frame === frame) {
      if (this.gos[i].special === "strike" ) return "X"
      else if (this.gos[i].special === "spare" ) return "/"
      else return String(this.gos[i].downedPins);
    };
  }
  return "-"
};

// Untested!!
Stream.prototype.displayFrameScore = function(frame) {
  for (var i = 0; i < this.gos.length; i++) {
    if (this.gos[i].score > 0 && this.gos[i].frame === frame) {
      return this.gos[i].score;
    };
  }
  return "-"
};



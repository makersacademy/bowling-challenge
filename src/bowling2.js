
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
  if ( this.go === 1 && this.remainingPins === 0 ) {this.special = "strike"; }
  else if ( this.go === 2 && this.remainingPins === 0 ) {this.special = "spare"; }
  else if ( this.go === 2 ) { this.score = 10 - this.remainingPins; };
};

Ball.prototype.setupNext = function(lastBall) {
  if (lastBall.frame === 9 && lastBall.go === 1 ) {
    this.go = 1
    this.frame = lastBall.frame + 1
  }
  else if (lastBall.go == 1  && lastBall.special != "strike") {
    this.remainingPins = lastBall.remainingPins
    this.go = lastBall.go + 1
    this.frame = lastBall.frame
  }
  else {
    this.go = 1
    this.frame = lastBall.frame + 1
  }

};

// *******************************************

function Stream() {

  this.gos = [];
  this.totalScore = 0;

}

Stream.prototype.nextball = function(points) {

  currentBall = this.gos.length -1

  // if its the first go have to add the first ball
  if (currentBall === -1 ) {
    var ball0 = new Ball();
    this.gos.push(ball0);
    currentBall +=1
  }
  else {
    // create the next ball
    var ball2 = new Ball();
    ball2.setupNext(this.gos[currentBall])  //previous ball being passed in
    this.gos.push(ball2);
    currentBall +=1
  };

  this.gos[currentBall].bowl(points);

  this._calcSpareBonus(currentBall,points);
  this._calcStrikeBonus(currentBall,points);

//work out the total score
  this.totalScore = 0;
  for (var i = 0; i < this.gos.length; i++) { this.totalScore += this.gos[i].score; };

};

Stream.prototype._calcSpareBonus = function(current,nextPoints) {
  if (current > 0 ) {
    if (this.gos[current-1].special === "spare") {
      this.gos[current-1].score = 10 + nextPoints;
    };
  };
};

Stream.prototype._calcStrikeBonus = function(current,nextPoints) {
  if (current > 1 ) {
    if (this.gos[current-2].special === "strike") {
      this.gos[current-2].score = 10 + this.gos[current-1].downedPins + nextPoints;
    };
  };
};


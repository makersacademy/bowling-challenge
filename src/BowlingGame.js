function BowlingGame() {
  this.getScore = new Score();
  this.currentFrame = 1;
  this.rollNumber = 1;
  this.currentPins = 10;
};

BowlingGame.prototype.randomRoll = function(){
  if (this.currentFrame > 10) { throw "No more throws, the game is over!" }
  pins = Math.floor(Math.random() * (this.currentPins + 1));
  this.currentPins -= pins;
  return pins;
}

BowlingGame.prototype.isGameOver = function(){
  return this.currentFrame > 10;
}

BowlingGame.prototype._setNewFrame = function(){
  this.currentPins = 10;
  this.currentFrame++;
}

BowlingGame.prototype._finalFrame = function(pins){
  if (this.rollNumber == 1) {
    this.currentPins -= pins;
    this.rollNumber++;
  }
  else if (this.rollNumber == 2) {
    this.currentPins -= pins;
    if (this.currentPins <= 0) {
      this.rollNumber++;
    }
    else {
      this._setNewFrame();
    }
  }
  else if (this.rollNumber == 3) { this.currentFrame++ }
}

BowlingGame.prototype.roll = function(pins){
  this.getScore.rolls.push(pins);
  if (this.currentFrame == 10) {
    this._finalFrame(pins);
  }
  else if (pins == 10 && this.rollNumber == 1) {
    this._setNewFrame();
  }
  else if (this.rollNumber == 1) {  
    this.rollNumber++;
  }
  else
  {
    this.rollNumber--;
    this._setNewFrame();
  }
}

BowlingGame.prototype.getFrame = function(){
  return this.currentFrame;
}


